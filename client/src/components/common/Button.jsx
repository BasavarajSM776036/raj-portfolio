import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '', ...props }) => {
  const baseStyle = 'relative px-6 py-2.5 rounded-md font-heading font-semibold tracking-wider text-sm transition-all duration-300 outline-none flex items-center justify-center gap-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/40 hover:bg-accent-cyan hover:text-primary hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]',
    secondary: 'bg-accent-purple/15 text-accent-purple border border-accent-purple/40 hover:bg-accent-purple hover:text-primary hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]',
    outline: 'bg-transparent text-text-secondary border border-white/20 hover:border-accent-cyan hover:text-accent-cyan',
    flat: 'bg-transparent text-text-muted hover:text-accent-cyan'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
