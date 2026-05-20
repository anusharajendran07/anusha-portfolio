import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE, EMAILJS_CONFIG } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setFormStatus({
        type: 'error',
        message:
          '⚠ EmailJS not configured yet. Please contact via email instead: ' +
          PROFILE.email,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS if not already done
      if (window.emailjs) {
        window.emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Anusha',
        };

        await window.emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams
        );

        setFormStatus({
          type: 'success',
          message:
            '✓ Message sent! I\'ll get back to you within 24 hours.',
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        type: 'error',
        message:
          '✗ Something went wrong. Email me directly at ' +
          PROFILE.email,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-16 bg-bg-dark-2 relative z-10">
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
              07 — Contact
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 text-white"
            variants={itemVariants}
          >
            Let's Connect
          </motion.h2>

          <motion.div className="w-16 h-1 bg-cyan mb-12" variants={itemVariants} />
        </motion.div>

        {/* Contact grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Terminal */}
          <motion.div variants={itemVariants}>
            <div className="bg-bg-dark border border-border-color overflow-hidden">
              {/* Terminal header */}
              <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-border-color">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-text-muted ml-2 font-mono uppercase tracking-widest">
                  anusha@portfolio ~ contact
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-2">
                <div className="text-text-muted">
                  <span className="text-cyan">$ </span>
                  <span className="text-white/25"># initialising connection...</span>
                </div>
                <div className="text-text-muted">
                  <span className="text-cyan">$ </span>whoami
                </div>
                <div className="text-white ml-4">
                  anusha_r — full stack developer
                </div>
                <div className="text-text-muted mt-4">
                  <span className="text-cyan">$ </span>cat contact.json
                </div>
                <div className="text-white/25 ml-4">{`{`}</div>
                <div className="ml-8">
                  <div className="text-white/60">
                    <span className="text-cyan">"email"</span>
                    <span>: </span>
                  </div>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-cyan hover:underline"
                  >
                    "{PROFILE.email}"
                  </a>
                  <span className="text-white/25">,</span>
                </div>
                <div className="ml-8">
                  <div className="text-white/60">
                    <span className="text-cyan">"github"</span>
                    <span>: </span>
                  </div>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan hover:underline"
                  >
                    "{PROFILE.github.replace('https://', '')}"
                  </a>
                  <span className="text-white/25">,</span>
                </div>
                <div className="ml-8">
                  <div className="text-white/60">
                    <span className="text-cyan">"linkedin"</span>
                    <span>: </span>
                  </div>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan hover:underline"
                  >
                    "{PROFILE.linkedin.replace('https://', '')}"
                  </a>
                  <span className="text-white/25">,</span>
                </div>
                <div className="ml-8">
                  <span className="text-cyan">"status"</span>
                  <span>: </span>
                  <span className="text-cyan">"open_to_opportunities"</span>
                  <span className="text-white/25">,</span>
                </div>
                <div className="ml-8">
                  <span className="text-cyan">"location"</span>
                  <span>: </span>
                  <span className="text-white">"{PROFILE.location}"</span>
                </div>
                <div className="text-white/25">{`}`}</div>
                <div className="text-text-muted mt-4">
                  <span className="text-cyan">$ </span>
                  <span className="inline-block w-2 h-4 bg-cyan ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div variants={itemVariants}>
            <p className="text-text-muted text-base leading-relaxed mb-8">
              Open to full stack developer roles, internships, and
              collaborative projects. Drop me a message — I respond within 24
              hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field */}
              <motion.div whileHover={{ x: 2 }}>
                <label className="font-mono text-xs uppercase tracking-widest text-cyan block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  required
                  className="w-full px-4 py-3 bg-surface border border-border-color text-white placeholder-text-muted focus:border-cyan focus:outline-none transition-all"
                />
              </motion.div>

              {/* Email field */}
              <motion.div whileHover={{ x: 2 }}>
                <label className="font-mono text-xs uppercase tracking-widest text-cyan block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  required
                  className="w-full px-4 py-3 bg-surface border border-border-color text-white placeholder-text-muted focus:border-cyan focus:outline-none transition-all"
                />
              </motion.div>

              {/* Message field */}
              <motion.div whileHover={{ x: 2 }}>
                <label className="font-mono text-xs uppercase tracking-widest text-cyan block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about the opportunity or project..."
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-surface border border-border-color text-white placeholder-text-muted focus:border-cyan focus:outline-none transition-all resize-none"
                />
              </motion.div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-cyan text-bg-dark font-mono font-bold uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  clipPath:
                    'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </motion.button>

              {/* Status message */}
              {formStatus && (
                <motion.div
                  className={`p-4 border text-sm font-mono ${
                    formStatus.type === 'success'
                      ? 'bg-cyan-dim border-border-color text-cyan'
                      : 'bg-red-500/10 border-red-500/30 text-red-400'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
