import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-bg-dark flex flex-col items-center justify-center z-50"
      exit={{ opacity: 0, visibility: 'hidden' }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated name */}
      <motion.h1
        className="text-5xl md:text-7xl font-display font-black tracking-tight"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundImage: 'linear-gradient(135deg, #00e5ff 0%, #7c3aed 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        AR
      </motion.h1>

      {/* Loading bar */}
      <div className="mt-8 w-48 h-0.5 bg-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-cyan"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
