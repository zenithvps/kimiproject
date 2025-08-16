const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/chat', limiter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Chat endpoint
app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ 
        error: 'Message is required and must be a string' 
      });
    }

    // Check if OpenRouter API key is available
    if (!process.env.OPENROUTER_API_KEY) {
      // Return dummy response if no API key
      const dummyResponses = [
        "That's an interesting question! Let me think about that...",
        "I understand what you're asking. Here's what I can tell you...",
        "Great question! Based on my knowledge, I would say...",
        "I'm processing your request. Here's my response...",
        "Thanks for asking! Let me provide you with some insights...",
        "I've analyzed your question and here's what I found...",
        "That's a complex topic. Let me break it down for you...",
        "I appreciate your curiosity! Here's what I know about this...",
      ];
      
      const response = dummyResponses[Math.floor(Math.random() * dummyResponses.length)] +
        " This is a dummy response since OpenRouter API key is not configured. To get real AI responses, please set the OPENROUTER_API_KEY environment variable.";
      
      return res.json({ message: response });
    }

    // Use OpenRouter API
    const openRouterResponse = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
      model: process.env.OPENROUTER_MODEL || 'openai/gpt-4',
      messages: [
        {
          role: "system",
          content: "You are MyGrok, a helpful AI assistant. Provide clear, accurate, and helpful responses. Be conversational and engaging."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.FRONTEND_URL || 'http://localhost:3000',
        'X-Title': 'MyGrok AI Chatbot'
      }
    });

    const response = openRouterResponse.data.choices[0].message.content;
    res.json({ message: response });

  } catch (error) {
    console.error('Chat endpoint error:', error);
    
    if (error.response) {
      // OpenRouter API error
      const status = error.response.status;
      const data = error.response.data;
      
      if (status === 401) {
        return res.status(401).json({ 
          error: 'OpenRouter API key is invalid. Please check your configuration.' 
        });
      } else if (status === 429) {
        return res.status(429).json({ 
          error: 'Rate limit exceeded. Please try again later.' 
        });
      } else if (status === 402) {
        return res.status(402).json({ 
          error: 'Insufficient credits. Please check your OpenRouter account.' 
        });
      } else {
        return res.status(status).json({ 
          error: data.error?.message || 'OpenRouter API error occurred.' 
        });
      }
    }
    
    res.status(500).json({ 
      error: 'An error occurred while processing your request. Please try again.' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 MyGrok backend server running on port ${PORT}`);
  console.log(`📝 Chat endpoint: http://localhost:${PORT}/chat`);
  console.log(`❤️  Health check: http://localhost:${PORT}/health`);
  
  if (!process.env.OPENROUTER_API_KEY) {
    console.log('⚠️  OpenRouter API key not found. Using dummy responses.');
    console.log('   Set OPENROUTER_API_KEY environment variable for real AI responses.');
    console.log('   Get your API key from: https://openrouter.ai/keys');
  } else {
    console.log('✅ OpenRouter API key found. Real AI responses enabled.');
    console.log(`🤖 Using model: ${process.env.OPENROUTER_MODEL || 'openai/gpt-4'}`);
  }
});