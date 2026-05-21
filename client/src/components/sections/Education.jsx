import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { fadeIn } from '../../utils/motion';
import { FiBookOpen } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech – Computer Science & Engineering',
      institution: 'SDM Institute of Technology',
      details: 'CGPA: 8'
    },
    {
      degree: 'Class XII – Karnataka Board',
      institution: 'Pre-University College',
      details: ''
    },
    {
      degree: 'Class X – Karnataka Board',
      institution: 'High School',
      details: ''
    }
  ];

  return (
    <section id="education" className="py-24 relative max-w-4xl mx-auto px-6">
      <div className="flex flex-col text-center mb-16">
        <motion.h2
          variants={fadeIn('down', 'tween', 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-heading"
        >
          Education
        </motion.h2>
        <motion.div
          variants={fadeIn('down', 'tween', 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-line"
        />
      </div>

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn('up', 'tween', 0.3 + idx * 0.1, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Card className="border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                  <FiBookOpen className="text-accent-cyan" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-text-secondary font-body mb-1">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="text-accent-purple font-body font-medium">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
