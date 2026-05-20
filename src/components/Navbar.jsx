import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavbarScroll } from '../hooks/useCustom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useNavbarScroll();

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Certs', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 px-4 md:px-16 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
      style={{
        backgroundColor: isScrolled
          ? 'rgba(5, 8, 16, 0.7)'
          : 'rgba(5, 8, 16, 0.3)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 229, 255, 0.15)',
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-xl font-display font-black text-cyan tracking-wider"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AR
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-text-muted hover:text-cyan transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ color: '#00e5ff' }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hidden md:block font-mono text-xs uppercase tracking-widest px-6 py-2.5 border border-cyan text-cyan hover:bg-cyan hover:text-bg-dark transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5 cursor-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-cyan block"
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-cyan block"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-cyan block"
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`absolute top-full left-0 right-0 md:hidden bg-bg-dark/95 backdrop-blur-xl border-t border-border-color ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block font-display text-lg font-bold text-white hover:text-cyan transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block font-mono text-xs uppercase tracking-widest px-6 py-2.5 border border-cyan text-cyan hover:bg-cyan hover:text-bg-dark transition-all w-fit"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
