import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROFILE, ROLES } from '../data/portfolio';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const delay = isDeleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, roleIndex, isDeleting]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center px-4 md:px-16 pt-20 pb-20 overflow-hidden"
    >
      {/* Background glows */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)',
        }}
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }}
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Content */}
      <motion.div
        className="max-w-3xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 border border-border-color rounded-full mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-cyan"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-mono text-xs uppercase tracking-widest text-cyan">
            {PROFILE.status}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-6xl md:text-8xl font-display font-black tracking-tight mb-6"
          variants={itemVariants}
        >
          <span
            style={{
              backgroundImage:
                'linear-gradient(135deg, #f0f4ff 0%, #00e5ff 60%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {PROFILE.name}
          </span>
        </motion.h1>

        {/* Typing effect */}
        <motion.p
          className="font-mono text-base md:text-lg text-text-muted mb-6 h-8"
          variants={itemVariants}
        >
          {displayText}
          <span className="text-cyan animate-blink">▋</span>
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-text-muted max-w-xl leading-relaxed mb-8"
          variants={itemVariants}
        >
          {PROFILE.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-cyan text-bg-dark font-mono text-sm font-bold uppercase tracking-widest text-center"
            style={{
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
            whileHover={{ y: -2, boxShadow: '0 0 30px rgba(0,229,255,0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border border-border-color text-white font-mono text-sm font-bold uppercase tracking-widest text-center hover:border-cyan hover:text-cyan"
            style={{
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border-color text-white font-mono text-sm font-bold uppercase tracking-widest text-center hover:border-cyan hover:text-cyan"
            style={{
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Resume ↗
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex gap-3" variants={itemVariants}>
          <motion.a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-border-color flex items-center justify-center text-text-muted hover:border-cyan hover:text-cyan transition-all"
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0,229,255,0.3)' }}
            title="GitHub"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </motion.a>
          <motion.a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-border-color flex items-center justify-center text-text-muted hover:border-cyan hover:text-cyan transition-all"
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0,229,255,0.3)' }}
            title="LinkedIn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
          <motion.a
            href={`mailto:${PROFILE.email}`}
            className="w-10 h-10 border border-border-color flex items-center justify-center text-text-muted hover:border-cyan hover:text-cyan transition-all"
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0,229,255,0.3)' }}
            title="Email"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 7L2 7" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
          Scroll
        </p>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-cyan to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
