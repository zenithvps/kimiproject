import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Message } from '../types';
import ChatMessage from './ChatMessage';

interface ChatAreaProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {messages.length === 0 && !isLoading && (
          <motion.div
            className="text-center text-grok-text-secondary mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🤖</div>
            <h2 className="text-2xl font-semibold mb-2">Welcome to MyGrok</h2>
            <p className="text-lg">Ask me anything and I'll help you out!</p>
          </motion.div>
        )}
        
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isLoading && (
          <ChatMessage
            message={{
              id: 'typing',
              content: '',
              role: 'assistant',
              timestamp: new Date()
            }}
            isTyping={true}
          />
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatArea;