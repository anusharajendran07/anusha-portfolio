import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT } from '../data/portfolio';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="about" className="py-24 px-4 md:px-16 bg-bg-dark-2 relative z-10">
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
              01 — About
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 text-white"
            variants={itemVariants}
          >
            Who I Am
          </motion.h2>

          <motion.div className="w-16 h-1 bg-cyan mb-12" variants={itemVariants} />
        </motion.div>

        {/* Content grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Text */}
          <div className="space-y-6">
            {ABOUT.highlights.map((highlight, index) => (
              <motion.p
                key={index}
                className="text-base md:text-lg text-text-muted leading-relaxed"
                variants={itemVariants}
              >
                {index === 0 && <span className="text-white font-semibold">I'm Anusha R, </span>}
                {index === 1 && <span className="text-white font-semibold">I build </span>}
                {index === 2 && <span className="text-white font-semibold">Currently expanding </span>}
                {highlight}
              </motion.p>
            ))}

            {/* Info rows */}
            <motion.div className="space-y-3 pt-6" variants={itemVariants}>
              {ABOUT.info.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 py-2 border-b border-white/5"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan min-w-20">
                    {item.key}
                  </span>
                  <span
                    className={`text-sm ${
                      item.highlight ? 'text-cyan' : 'text-text-muted'
                    }`}
                  >
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
          >
            {ABOUT.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-surface border border-border-color relative overflow-hidden group hover:border-cyan transition-all"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="text-4xl md:text-5xl font-display font-black text-cyan mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
