import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

// ─── Scroll To Top Component ─────────────────────────────────────────────────
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // ── Track scroll position ──
  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // ── Scroll to top handler ──
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 200,
          }}
          onClick={scrollToTop}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 25px rgba(6, 182, 212, 0.5), 0 0 50px rgba(6, 182, 212, 0.2)',
          }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 flex items-center justify-center rounded-full glass-card group"
          style={{
            background:
              'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(6,182,212,0.1))',
            border: '1px solid transparent',
            backgroundClip: 'padding-box',
          }}
          aria-label="Scroll to top"
        >
          {/* ── Gradient Border Wrapper ── */}
          <span
            className="absolute inset-0 rounded-full -z-10"
            style={{
              padding: '1px',
              background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
              WebkitMask:
                'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              borderRadius: '9999px',
            }}
          />

          {/* ── Arrow Icon ── */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <FiArrowUp className="text-lg text-text-secondary group-hover:text-accent-cyan transition-colors duration-300" />
          </motion.div>

          {/* ── Hover Glow Ring ── */}
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-cyan pointer-events-none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
