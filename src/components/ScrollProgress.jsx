import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useCustom';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan to-purple-600 z-50"
      style={{ width: `${progress}%` }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default ScrollProgress;
