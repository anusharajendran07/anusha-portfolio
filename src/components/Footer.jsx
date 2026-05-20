import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="py-8 px-4 md:px-16 border-t border-border-color relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
        <motion.span
          className="font-display text-lg font-black text-cyan"
          whileHover={{ scale: 1.05 }}
        >
          Anusha R
        </motion.span>

        <div className="space-y-2 md:space-y-0">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
            © 2025 — Built with passion in Puducherry
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-white/20">
            Full Stack Developer · AI/ML Enthusiast
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
