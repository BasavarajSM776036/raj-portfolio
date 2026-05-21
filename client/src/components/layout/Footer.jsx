import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

// ─── Social Links ────────────────────────────────────────────────────────────
const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/BasavarajSM776036',
    hoverColor: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    url: 'https://linkedin.com/in/basavaraj-satteppamaneppagol-b5bb72383',
    hoverColor: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]',
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    url: 'https://wa.me/917760369208',
    hoverColor: 'hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]',
  },
  {
    name: 'Email',
    icon: HiOutlineMail,
    url: 'mailto:basavarajmaneppagol7760@gmail.com',
    hoverColor: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]',
  },
];

// ─── Animation Variants ──────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 20, stiffness: 100 },
  },
};

// ─── Footer Component ────────────────────────────────────────────────────────
const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* ── Gradient Top Border ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent" />
      <div className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-50" />

      {/* ── Glass Background ── */}
      <div className="glass border-t border-white/5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          {/* ── Built By Text ── */}
          <motion.p
            variants={itemVariants}
            className="text-center font-heading text-lg md:text-xl text-text-primary mb-6"
          >
            Designed &amp; Built by{' '}
            <span className="gradient-text font-semibold text-glow-purple">
              Basavaraj S Maneppagol
            </span>
          </motion.p>

          {/* ── Social Icons ── */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-8"
          >
            {socialLinks.map(({ name, icon: Icon, url, hoverColor }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 ${hoverColor} hover:border-white/20`}
                aria-label={name}
              >
                <Icon className="text-lg text-text-secondary group-hover:text-text-primary transition-colors duration-300" />

                {/* Tooltip */}
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-body rounded-md bg-card-bg border border-white/10 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* ── Divider ── */}
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

          {/* ── Copyright ── */}
          <motion.p
            variants={itemVariants}
            className="text-center text-text-secondary font-body text-sm mb-2"
          >
            &copy; 2026 Basavaraj. All rights reserved.
          </motion.p>

          {/* ── Made With Love ── */}
          <motion.p
            variants={itemVariants}
            className="text-center text-text-muted font-body text-xs"
          >
            Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="inline-block text-red-500"
            >
              ❤️
            </motion.span>{' '}
            and React
          </motion.p>
        </motion.div>
      </div>

      {/* ── Ambient Glow ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent-purple/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
