import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { fadeIn } from '../../utils/motion';
import { FiFileText } from 'react-icons/fi';

const Certifications = () => {
  const certificates = [
    'Internet of Things (IoT)',
    'Complete Web Development Training',
    'Build Your Own Generative AI Model',
    'Data Structures & Algorithms using Java',
    'Database and SQL'
  ];

  return (
    <section id="certifications" className="py-24 relative max-w-6xl mx-auto px-6">
      <div className="flex flex-col text-center mb-16">
        <motion.h2
          variants={fadeIn('down', 'tween', 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-heading"
        >
          Certifications
        </motion.h2>
        <motion.div
          variants={fadeIn('down', 'tween', 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-line"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn('up', 'tween', 0.3 + idx * 0.05, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card className="border border-white/5 p-6" glowColor={idx % 3 === 0 ? 'purple' : idx % 3 === 1 ? 'blue' : 'green'}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-purple/20 flex items-center justify-center flex-shrink-0">
                  <FiFileText className="text-accent-purple" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-semibold text-white">
                    {cert}
                  </h3>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
