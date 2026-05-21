import React from "react";
import { motion } from "framer-motion";
import Card from "../common/Card";
import { fadeIn } from "../../utils/motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaJava,
  FaPython,
  FaEye,
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiExpress } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "React.js", icon: FaReact, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    { name: "MySQL", icon: FaDatabase, color: "text-blue-600" },
    { name: "GitHub", icon: FaGithub, color: "text-white" },
    { name: "REST APIs", icon: FaJs, color: "text-purple-400" },
    { name: "Java", icon: FaJava, color: "text-red-600" },
    { name: "OpenCV", icon: FaEye, color: "text-green-600" },
    { name: "Python", icon: FaPython, color: "text-yellow-500" },
  ];

  return (
    <section id="skills" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="flex flex-col text-center mb-16">
        <motion.h2
          variants={fadeIn("down", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-heading"
        >
          My Skills
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
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1, y: -10, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card
              className="p-6 flex flex-col items-center gap-3 border border-white/5"
              glowColor={idx % 2 === 0 ? "blue" : "purple"}
            >
              <skill.icon size={36} className={skill.color} />
              <span className="text-white font-body text-sm font-medium text-center">
                {skill.name}
              </span>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
