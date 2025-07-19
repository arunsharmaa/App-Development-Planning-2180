import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlus, FiTarget } = FiIcons;

const Header = ({ onAddTask }) => {
  return (
    <motion.header 
      className="text-center mb-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="text-primary-500"
        >
          <SafeIcon icon={FiTarget} className="text-4xl" />
        </motion.div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
          TaskFlow
        </h1>
      </div>
      
      <p className="text-gray-600 mb-6 text-lg">
        Organize your life, one task at a time
      </p>
      
      <motion.button
        onClick={onAddTask}
        className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <SafeIcon icon={FiPlus} className="text-xl" />
        Add New Task
      </motion.button>
    </motion.header>
  );
};

export default Header;