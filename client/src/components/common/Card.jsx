import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', glowColor = 'blue', ...props }) => {
  const glowStyles = {
    blue: 'hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
    purple: 'hover:border-accent-purple hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]',
    green: 'hover:border-green-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]',
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`glass-card p-6 rounded-xl border border-white/5 transition-all duration-300 ${glowStyles[glowColor]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
