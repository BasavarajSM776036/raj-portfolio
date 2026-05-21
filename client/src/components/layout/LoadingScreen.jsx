import { motion, AnimatePresence } from 'framer-motion';

// ─── Loading Screen Component ────────────────────────────────────────────────
// The parent component controls visibility via the `isLoading` prop.
const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.5, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center"
        >
          {/* ── Ambient Background Glows ── */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute top-1/3 left-1/3 w-64 h-64 bg-accent-purple/20 rounded-full blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-accent-cyan/20 rounded-full blur-[100px]"
            />
          </div>

          {/* ── BS Initials ── */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              damping: 15,
              stiffness: 100,
              delay: 0.1,
            }}
            className="relative mb-8"
          >
            <motion.h1
              animate={{
                textShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                  '0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(6, 182, 212, 0.4)',
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                ],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="text-6xl md:text-8xl font-heading font-bold gradient-text select-none"
            >
              BS
            </motion.h1>

            {/* Subtle ring pulse */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="absolute inset-0 border-2 border-accent-purple/30 rounded-full"
              style={{ margin: '-20px' }}
            />
          </motion.div>

          {/* ── Loading Bar ── */}
          <div className="w-48 md:w-64 h-1 bg-white/5 rounded-full overflow-hidden mb-4">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{
                duration: 2.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="h-full rounded-full bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-purple"
              style={{
                boxShadow:
                  '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)',
              }}
            />
          </div>

          {/* ── Loading Text ── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-text-muted font-body text-sm tracking-widest uppercase"
          >
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              Loading...
            </motion.span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
