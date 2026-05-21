import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Button from '../common/Button';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Education', id: 'education' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Contact', id: 'contact' },
];

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -100,
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      type: 'tween',
      duration: 0.4,
      ease: 'easeOut',
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    clipPath: 'inset(0 0 100% 0)',
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -65% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observerRef.current.observe(el);
      });
    }, 600);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const scrollToSection = useCallback(
    (id) => {
      setMobileOpen(false);
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = 90;
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
    []
  );

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 120, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-card border border-white/10 rounded-3xl px-6 py-4 ${
          scrolled 
            ? 'shadow-[0_10px_40px_rgba(168,85,247,0.15)]' 
            : 'shadow-lg shadow-black/10'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
              aria-label="Scroll to top"
            >
              <div className="flex items-center gap-2">
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <span className="text-2xl font-heading font-black text-white tracking-tight">
                    BS
                  </span>
                </div>
                <div className="hidden md:block">
                  <span className="text-lg font-heading font-bold text-white">
                    Basavaraj
                  </span>
                  <span className="block text-xs text-text-muted font-body">
                    MERN Developer
                  </span>
                </div>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-2">
              {navLinks.map(({ name, id }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`relative px-4 py-2 text-sm font-body font-medium rounded-xl transition-all duration-300 ${
                    activeSection === id
                      ? 'text-accent-cyan'
                      : 'text-text-secondary hover:text-accent-purple'
                  }`}
                >
                  {name}
                  {activeSection === id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="primary" onClick={() => scrollToSection('contact')}>
                  Hire Me
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="xl:hidden relative w-12 h-12 flex items-center justify-center rounded-xl text-text-primary hover:text-accent-purple transition-colors glass"
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <RiCloseLine size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <RiMenu3Line size={26} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Animated Gradient Line */}
          <motion.div
            className="mt-4 h-0.5 rounded-full bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="xl:hidden absolute top-full left-0 right-0 mt-4"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="glass-card border border-white/10 rounded-3xl p-6 shadow-[0_20px_60px_rgba(168,85,247,0.2)]">
                <div className="space-y-2 mb-6">
                  {navLinks.map(({ name, id }) => (
                    <motion.button
                      key={id}
                      variants={mobileLinkVariants}
                      onClick={() => scrollToSection(id)}
                      className={`block w-full text-left px-4 py-3 rounded-xl font-body text-base transition-all duration-300 ${
                        activeSection === id
                          ? 'text-accent-cyan bg-white/5 border-l-3 border-accent-cyan'
                          : 'text-text-secondary hover:text-accent-purple hover:bg-white/5'
                      }`}
                    >
                      {name}
                    </motion.button>
                  ))}
                </div>
                <motion.div
                  variants={mobileLinkVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="primary" onClick={() => scrollToSection('contact')} className="w-full">
                    Hire Me
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
