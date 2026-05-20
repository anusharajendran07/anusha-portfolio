import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE } from '../data/portfolio';

const Journey = () => {
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

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="journey" className="py-24 px-4 md:px-16 relative z-10">
      <div className="max-w-4xl mx-auto">
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
              04 — Journey
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 text-white"
            variants={itemVariants}
          >
            My Timeline
          </motion.h2>

          <motion.div className="w-16 h-1 bg-cyan mb-12" variants={itemVariants} />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative pl-8 md:pl-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px bg-border-color"
            initial={{ height: '0%' }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          {TIMELINE.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 md:mb-16 relative"
              variants={timelineItemVariants}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-5 md:-left-7 top-1 w-3 h-3 rounded-full border-2 border-cyan bg-bg-dark"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              />

              {/* Glow on hover */}
              <motion.div
                className="absolute -left-5 md:-left-7 top-1 w-3 h-3 rounded-full"
                whileHover={{
                  boxShadow: '0 0 12px rgba(0,229,255,0.6)',
                }}
              />

              {/* Content */}
              <div>
                <motion.span
                  className="font-mono text-xs uppercase tracking-widest text-cyan"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  {item.date}
                </motion.span>

                <motion.h3
                  className="text-xl font-display font-bold mt-1 mb-1 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.15 }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="text-sm text-text-muted mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {item.subtitle}
                </motion.p>

                <motion.p
                  className="text-sm text-text-muted leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.25 }}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
