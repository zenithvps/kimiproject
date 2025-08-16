import axios from 'axios';
import { ApiResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendMessage = async (message: string): Promise<string> => {
  try {
    const response = await api.post<ApiResponse>('/chat', {
      message,
    });
    
    if (response.data.error) {
      throw new Error(response.data.error);
    }
    
    return response.data.message;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.error || 'Failed to send message';
      console.error('API Error:', error.response?.status, errorMessage);
      throw new Error(errorMessage);
    }
    throw error;
  }
};

// Fallback function for when API is not available
export const getDummyResponse = async (message: string): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
  
  const responses = [
    "That's an interesting question! Let me think about that...",
    "I understand what you're asking. Here's what I can tell you...",
    "Great question! Based on my knowledge, I would say...",
    "I'm processing your request. Here's my response...",
    "Thanks for asking! Let me provide you with some insights...",
    "I've analyzed your question and here's what I found...",
    "That's a complex topic. Let me break it down for you...",
    "I appreciate your curiosity! Here's what I know about this...",
  ];
  
  return responses[Math.floor(Math.random() * responses.length)] + 
         " This is a dummy response since the OpenRouter API is not connected. In a real implementation, this would be replaced with actual AI responses from OpenRouter.";
};