import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  streamingText?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading, streamingText }) => {
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [inputValue]);

  return (
    <motion.div 
      className="sticky bottom-0 bg-grok-dark border-t border-grok-gray p-4"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="flex items-end space-x-3">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="w-full bg-grok-light-gray text-grok-text placeholder-grok-text-secondary rounded-2xl px-4 py-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-grok-accent focus:ring-opacity-50 min-h-[44px] max-h-[120px]"
              disabled={isLoading}
              rows={1}
            />
            {streamingText && (
              <div className="absolute bottom-0 left-0 right-0 bg-grok-light-gray text-grok-text rounded-2xl px-4 py-3 pr-12 opacity-50 pointer-events-none">
                {streamingText}
              </div>
            )}
          </div>
          
          <motion.button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="bg-grok-accent text-white p-3 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={20} />
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ChatInput;