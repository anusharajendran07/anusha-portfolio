import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/portfolio';

const Skills = () => {
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
    <section id="skills" className="py-24 px-4 md:px-16 relative z-10">
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
              02 — Skills
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 text-white"
            variants={itemVariants}
          >
            Technical Arsenal
          </motion.h2>

          <motion.div className="w-16 h-1 bg-cyan mb-12" variants={itemVariants} />
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SKILLS.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="p-6 bg-surface border border-border-color group hover:border-cyan transition-all"
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,229,255,0.08)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-cyan mb-6">
                {skillGroup.category}
              </h3>

              <div className="space-y-5">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white">{skill.name}</span>
                      <span className="font-mono text-xs text-cyan">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-0.5 bg-white/5 overflow-hidden rounded-full">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan to-purple-600"
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          ease: 'easeOut',
                          delay: groupIndex * 0.1 + skillIndex * 0.05,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
