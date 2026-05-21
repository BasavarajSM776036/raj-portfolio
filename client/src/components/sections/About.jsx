import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { fadeIn } from '../../utils/motion';

const About = () => {
  const specialties = [
    'MERN Stack Development',
    'API Integration',
    'UI/UX Design',
    'Performance Optimization',
    'Responsive Web Applications'
  ];

  const stats = [
    { value: '6+', label: 'Projects' },
    { value: '10+', label: 'Technologies' },
    { value: '6x', label: 'National Sports' },
    { value: '11x', label: 'State Sports' },
  ];

  return (
    <section id="about" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="flex flex-col text-center mb-16">
        <motion.h2
          variants={fadeIn('down', 'tween', 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-heading"
        >
          About Me
        </motion.h2>
        <motion.div
          variants={fadeIn('down', 'tween', 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-line"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Biography */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-7 text-left space-y-6"
        >
          <p className="text-text-primary font-body text-lg leading-relaxed">
            Basavaraj is a passionate Full Stack Web Developer with hands-on experience in building responsive and dynamic web applications using React.js, Node.js, Express.js, JavaScript, Tailwind CSS, and MySQL.
          </p>
          
          <div className="space-y-3">
            <h3 className="text-xl font-heading font-semibold text-white"> specializes in:</h3>
            <ul className="space-y-2">
              {specialties.map((specialty, idx) => (
                <li key={idx} className="flex items-center gap-3 text-text-secondary">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                  <span>{specialty}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            {stats.map((stat, idx) => (
              <Card key={idx} className="p-4 text-center flex flex-col justify-center border border-white/5" glowColor="purple">
                <span className="font-heading text-2xl sm:text-3xl font-black gradient-text">{stat.value}</span>
                <span className="text-text-muted font-body text-xs sm:text-sm mt-1">{stat.label}</span>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Tech Icons */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.4, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-5 text-left"
        >
          <Card className="w-full border border-white/5" glowColor="blue">
            <h3 className="font-heading text-lg font-bold text-accent-cyan mb-4 tracking-wider uppercase">
              Tech Stack
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {['React.js', 'Node.js', 'Tailwind', 'Express.js', 'MySQL', 'JavaScript'].map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card-bg/50 border border-white/5 rounded-lg p-4 flex flex-col items-center justify-center hover:border-accent-cyan/40 transition-all duration-300 animate-float"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <span className="text-white font-semibold font-body text-sm">{tech}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
