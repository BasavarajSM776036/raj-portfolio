import React from "react";
import { motion } from "framer-motion";
import Card from "../common/Card";
import { fadeIn } from "../../utils/motion";
import { FiStar, FiZap } from "react-icons/fi";

const Achievements = () => {
  const achievements = [
    {
      title: "National Sepak Takraw Player",
      count: "6",
      description: "Times Represented",
      icon: FiStar,
      glow: "purple",
    },
    {
      title: "State Sepak Takraw Player",
      count: "11",
      description: "Times Represented",
      icon: FiZap,
      glow: "blue",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 relative max-w-6xl mx-auto px-6"
    >
      <div className="flex flex-col text-center mb-16">
        <motion.h2
          variants={fadeIn("down", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-heading"
        >
          Sports & Achievements
        </motion.h2>
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-line"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn(
              idx % 2 === 0 ? "right" : "left",
              "tween",
              0.3 + idx * 0.1,
              0.5,
            )}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <Card
              className="border border-white/5 p-8 text-center"
              glowColor={achievement.glow}
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20">
                <achievement.icon
                  size={48}
                  className={
                    achievement.glow === "purple"
                      ? "text-accent-purple"
                      : "text-accent-cyan"
                  }
                />
              </div>
              <div className="text-7xl font-heading font-black gradient-text mb-2">
                {achievement.count}
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-text-muted font-body">
                {achievement.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
