import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ChatArea from './components/ChatArea';
import ChatInput from './components/ChatInput';
import { Message } from './types';
import { saveChatHistory, loadChatHistory, clearChatHistory } from './utils/storage';
import { sendMessage, getDummyResponse } from './utils/api';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingText, setStreamingText] = useState('');

  // Load chat history on mount
  useEffect(() => {
    const savedMessages = loadChatHistory();
    setMessages(savedMessages);
  }, []);

  // Save chat history whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      saveChatHistory(messages);
    }
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setStreamingText('');

    try {
      // Try to use real API first, fallback to dummy response
      let response: string;
      try {
        response = await sendMessage(content);
      } catch (error) {
        console.log('API not available, using dummy response');
        response = await getDummyResponse(content);
      }

      // Simulate streaming response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '',
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);

      // Stream the response character by character
      for (let i = 0; i < response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 20 + Math.random() * 30));
        setStreamingText(response.substring(0, i + 1));
      }

      // Update the final message
      setMessages(prev => 
        prev.map(msg => 
          msg.id === botMessage.id 
            ? { ...msg, content: response }
            : msg
        )
      );

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setStreamingText('');
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    clearChatHistory();
  };

  return (
    <motion.div 
      className="h-screen flex flex-col bg-grok-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar onClearChat={handleClearChat} />
      <ChatArea messages={messages} isLoading={isLoading} />
      <ChatInput 
        onSendMessage={handleSendMessage} 
        isLoading={isLoading}
        streamingText={streamingText}
      />
    </motion.div>
  );
}

export default App;