import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolio';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 md:px-16 bg-bg-dark-2 relative z-10">
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
              03 — Projects
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 text-white"
            variants={itemVariants}
          >
            What I've Built
          </motion.h2>

          <motion.div className="w-16 h-1 bg-cyan mb-12" variants={itemVariants} />
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              className="group relative"
              variants={itemVariants}
            >
              <motion.div
                className="p-8 bg-surface border border-border-color relative overflow-hidden h-full flex flex-col"
                whileHover={{
                  borderColor: '#00e5ff',
                  y: -8,
                  boxShadow: '0 30px 80px rgba(0,229,255,0.1)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Top gradient line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Project number */}
                <span className="font-mono text-xs text-cyan/50 mb-3 group-hover:text-cyan transition-colors">
                  Project {project.number}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-display font-black mb-3 text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-xs text-text-muted flex items-start gap-2"
                    >
                      <span className="text-cyan flex-shrink-0 mt-1">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-2 py-1 bg-cyan-dim border border-border-color text-cyan font-mono text-xs uppercase tracking-wide"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0,229,255,0.2)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border-color">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-cyan text-bg-dark font-mono text-xs font-bold uppercase tracking-widest text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    GitHub ↗
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-border-color text-white font-mono text-xs font-bold uppercase tracking-widest text-center hover:border-cyan hover:text-cyan transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live Demo ↗
                    </motion.a>
                  )}
                  {project.event && (
                    <div className="px-4 py-2 border border-border-color text-text-muted font-mono text-xs font-bold uppercase tracking-widest text-center">
                      {project.event}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
