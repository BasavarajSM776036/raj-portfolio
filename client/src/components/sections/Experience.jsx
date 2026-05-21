import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../common/Card";
import Button from "../common/Button";
import { fadeIn } from "../../utils/motion";
import { FiBriefcase, FiCalendar, FiAward, FiX } from "react-icons/fi";

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experience = {
    role: "MERN Stack Intern",
    company: "Vtricks Technologies, Bengaluru",
    duration: "02 Feb 2026 – 09 May 2026",
    certificateDate: "12 May 2026",
    responsibilities: [
      "Developed responsive MERN stack web applications",
      "Worked with React.js, Node.js, Express.js, and MySQL",
      "Integrated REST APIs and improved application performance",
      "Implemented asynchronous JavaScript and DOM manipulation",
      "Participated in debugging, testing, and UI optimization",
      "Followed modern full-stack development practices",
    ],
  };

  return (
    <section id="experience" className="py-24 relative max-w-5xl mx-auto px-6">
      <div className="flex flex-col text-center mb-16">
        <motion.h2
          variants={fadeIn("down", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-heading"
        >
          Internship
        </motion.h2>
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-line"
        />
      </div>

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Timeline Connector */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple to-accent-cyan"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          <div className="ml-16">
            <Card
              glowColor="purple"
              className="border border-white/10 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side - Company Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute -left-14 mt-2 w-4 h-4 rounded-full bg-accent-purple border-4 border-primary shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                      whileHover={{ scale: 1.3 }}
                    />

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center">
                          <FiBriefcase className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-bold text-white">
                            {experience.role}
                          </h3>
                          <p className="text-accent-cyan font-body font-medium">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-text-muted">
                        <div className="flex items-center gap-2">
                          <FiCalendar size={14} />
                          <span className="text-sm">{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiAward size={14} />
                          <span className="text-sm">
                            Certificate: {experience.certificateDate}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {experience.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2 flex-shrink-0" />
                            <span className="text-text-secondary text-sm">
                              {resp}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        className="mt-6"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="secondary"
                          onClick={() => setIsModalOpen(true)}
                        >
                          View Certificate <FiAward />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Certificate Preview */}
                <div className="md:w-64 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="rounded-xl overflow-hidden border border-white/10 shadow-lg"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <img
                      src="/internship.jpg"
                      alt="Internship Certificate"
                      className="w-full h-48 object-cover cursor-pointer"
                    />
                    <div className="p-3 bg-card-bg/50">
                      <p className="text-xs text-text-muted text-center font-body">
                        Click to view full certificate
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full glass flex items-center justify-center text-white"
                onClick={() => setIsModalOpen(false)}
              >
                <FiX size={24} />
              </motion.button>

              {/* Certificate Image */}
              <div className="rounded-2xl overflow-hidden border-2 border-accent-purple/50 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
                <img
                  src="/internship.jpg"
                  alt="Internship Certificate"
                  className="w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
