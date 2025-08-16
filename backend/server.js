const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
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

    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
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
        " This is a dummy response since OpenAI API key is not configured. To get real AI responses, please set the OPENAI_API_KEY environment variable.";
      
      return res.json({ message: response });
    }

    // Use OpenAI API if available
    const OpenAI = require('openai');
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
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
    });

    const response = completion.choices[0].message.content;
    res.json({ message: response });

  } catch (error) {
    console.error('Chat endpoint error:', error);
    
    if (error.code === 'insufficient_quota' || error.code === 'invalid_api_key') {
      return res.status(401).json({ 
        error: 'OpenAI API key is invalid or quota exceeded. Please check your configuration.' 
      });
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
  
  if (!process.env.OPENAI_API_KEY) {
    console.log('⚠️  OpenAI API key not found. Using dummy responses.');
    console.log('   Set OPENAI_API_KEY environment variable for real AI responses.');
  } else {
    console.log('✅ OpenAI API key found. Real AI responses enabled.');
  }
});