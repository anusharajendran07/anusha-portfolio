import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS, LANGUAGES } from '../data/portfolio';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="certifications" className="py-24 px-4 md:px-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="flex items-center gap-3 mb-4"
            variants={itemVariants}
          >
            <div className="w-8 h-px bg-cyan" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan">
              06 — Certifications
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 text-white"
            variants={itemVariants}
          >
            Credentials
          </motion.h2>

          <motion.div className="w-16 h-1 bg-cyan mb-12" variants={itemVariants} />
        </motion.div>

        {/* Certifications grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              className="p-5 bg-surface border border-border-color flex items-start gap-4 hover:border-cyan transition-all"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <span className="text-2xl flex-shrink-0">{cert.icon}</span>
              <div className="min-w-0">
                <h3 className="text-sm font-display font-bold text-white">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-cyan uppercase tracking-widest mt-1">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Languages section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 pt-16 border-t border-border-color"
        >
          <motion.div
            className="flex items-center gap-3 mb-4"
            variants={itemVariants}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-cyan">
              Languages
            </span>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={containerVariants}
          >
            {LANGUAGES.map((lang, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-surface border border-border-color group hover:border-cyan transition-all"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="font-display font-bold text-white">
                  {lang.name}
                </h4>
                <p className="text-xs font-mono text-cyan uppercase tracking-widest mt-1">
                  {lang.level}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
