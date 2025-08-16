import React from 'react';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';

interface NavbarProps {
  onClearChat: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onClearChat }) => {
  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-grok-darker border-b border-grok-gray px-4 py-3"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-grok-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">MG</span>
          </div>
          <h1 className="text-xl font-bold text-grok-text">MyGrok</h1>
        </div>
        
        <motion.button
          onClick={onClearChat}
          className="flex items-center space-x-2 px-3 py-2 text-grok-text-secondary hover:text-grok-text hover:bg-grok-gray rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Trash2 size={16} />
          <span className="hidden sm:inline">Clear Chat</span>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;