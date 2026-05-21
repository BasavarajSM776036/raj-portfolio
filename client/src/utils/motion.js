// ─── Framer Motion Animation Presets ─────────────────────────────────────────
// Reusable animation variants for consistent, premium motion across the portfolio.

/**
 * Text reveal animation — slides up from below with spring physics.
 * @param {number} delay - Delay before animation starts (seconds)
 */
export const textVariant = (delay = 0) => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

/**
 * Directional fade-in animation.
 * @param {'left'|'right'|'up'|'down'} direction - Direction to fade from
 * @param {'tween'|'spring'|'inertia'} type - Transition type
 * @param {number} delay - Delay before animation starts (seconds)
 * @param {number} duration - Animation duration (seconds)
 */
export const fadeIn = (direction = 'up', type = 'tween', delay = 0, duration = 0.75) => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const value =
    direction === 'left' ? 100 :
    direction === 'right' ? -100 :
    direction === 'up' ? 100 :
    -100;

  return {
    hidden: {
      [axis]: value,
      opacity: 0,
    },
    show: {
      [axis]: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

/**
 * Zoom-in animation — scales from 0 to full size.
 * @param {number} delay - Delay before animation starts (seconds)
 * @param {number} duration - Animation duration (seconds)
 */
export const zoomIn = (delay = 0, duration = 0.75) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

/**
 * Slide-in from off-screen (100% of viewport dimension).
 * @param {'left'|'right'|'up'|'down'} direction - Direction to slide from
 * @param {'tween'|'spring'|'inertia'} type - Transition type
 * @param {number} delay - Delay before animation starts (seconds)
 * @param {number} duration - Animation duration (seconds)
 */
export const slideIn = (direction = 'left', type = 'tween', delay = 0, duration = 0.75) => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const value =
    direction === 'left' ? '-100%' :
    direction === 'right' ? '100%' :
    direction === 'up' ? '-100%' :
    '100%';

  return {
    hidden: {
      [axis]: value,
    },
    show: {
      [axis]: '0%',
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

/**
 * Stagger container — orchestrates child animation timing.
 * @param {number} staggerChildren - Delay between each child animation (seconds)
 * @param {number} delayChildren - Initial delay before first child animates (seconds)
 */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Card tilt configuration for interactive 3D hover effect.
 * Use with onMouseMove to calculate rotateX/rotateY from cursor position.
 */
export const cardTilt = () => ({
  rest: {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 300,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 300,
    },
  },
});

/**
 * Scale-in animation with spring physics — pops in from half size.
 * @param {number} delay - Delay before animation starts (seconds)
 */
export const scaleIn = (delay = 0) => ({
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      delay,
      damping: 15,
      stiffness: 150,
    },
  },
});
