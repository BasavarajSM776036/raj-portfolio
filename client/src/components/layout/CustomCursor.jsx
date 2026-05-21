import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

// ─── Custom Cursor Component ─────────────────────────────────────────────────
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // ── Detect mobile viewport ──
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ── Track mouse position ──
  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  // ── Track hover state on interactive elements ──
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.style?.cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // ── Mouse move listener ──
  useEffect(() => {
    if (isMobile) return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile, handleMouseMove]);

  // ── Add cursor-none to body ──
  useEffect(() => {
    if (isMobile) return;

    document.body.classList.add('cursor-none');
    return () => {
      document.body.classList.remove('cursor-none');
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <>
      {/* ── Small Dot — exact cursor position ── */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-accent-cyan"
        style={{
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
          left: mousePos.x - (isHovering ? 6 : 4),
          top: mousePos.y - (isHovering ? 6 : 4),
          boxShadow: '0 0 10px rgba(6, 182, 212, 0.6), 0 0 20px rgba(6, 182, 212, 0.3)',
          transition: 'width 0.2s, height 0.2s',
        }}
      />

      {/* ── Larger Ring — follows with spring delay ── */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border border-accent-purple"
        animate={{
          x: mousePos.x - (isHovering ? 24 : 16),
          y: mousePos.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200,
          mass: 0.5,
        }}
        style={{
          boxShadow: isHovering
            ? '0 0 15px rgba(168, 85, 247, 0.3)'
            : 'none',
        }}
      />
    </>
  );
};

export default CustomCursor;
