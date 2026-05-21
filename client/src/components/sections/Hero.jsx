import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn, textVariant } from "../../utils/motion";
import Button from "../common/Button";
import {
  FiArrowRight,
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMessageSquare,
} from "react-icons/fi";

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: FiGithub, url: "https://github.com/BasavarajSM776036" },
    {
      icon: FiLinkedin,
      url: "https://linkedin.com/in/basavaraj-satteppamaneppagol-b5bb72383",
    },
    { icon: FiMessageSquare, url: "https://wa.me/917760369208" },
    { icon: FiMail, url: "mailto:basavarajmaneppagol7760@gmail.com" },
  ];

  const normalizedX = useMotionValue(0);
  const normalizedY = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(normalizedY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(normalizedX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseNormX = (e.clientX - centerX) / (rect.width / 2);
    const mouseNormY = (e.clientY - centerY) / (rect.height / 2);
    normalizedX.set(mouseNormX);
    normalizedY.set(mouseNormY);
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleMouseLeave = () => {
    normalizedX.set(0);
    normalizedY.set(0);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-purple-600/30 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cyan-500/30 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Glowing Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent-cyan"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              y: [null, -50 - Math.random() * 100],
              opacity: [
                Math.random() * 0.5,
                Math.random(),
                Math.random() * 0.5,
              ],
              x: [null, Math.random() > 0.5 ? 20 : -20],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            style={{
              boxShadow: "0 0 10px rgba(6, 182, 212, 0.8)",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full relative z-10">
        {/* Text Area */}
        <div className="md:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            variants={textVariant(0.1)}
            initial="hidden"
            animate="show"
          >
            <span className="font-heading text-accent-cyan font-bold tracking-widest text-xs uppercase bg-accent-cyan/10 px-4 py-2 rounded-full border border-accent-cyan/20 inline-block">
              Welcome to my Portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-heading mt-6 leading-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text text-glow-purple">
              <TypeAnimation
                sequence={["Basavaraj", 2000]}
                wrapper="span"
                speed={50}
                repeat={0}
                className="inline-block"
              />
            </span>
          </motion.h1>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 0.8)}
            initial="hidden"
            animate="show"
            className="mt-4"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-body">
              <TypeAnimation
                sequence={[
                  "Full Stack MERN Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("up", "tween", 0.4, 0.8)}
            initial="hidden"
            animate="show"
            className="text-text-muted font-body mt-6 max-w-lg leading-relaxed text-lg"
          >
            Building Modern Web Experiences
          </motion.p>

          <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.8)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4 mt-10"
          >
            <Button variant="primary" onClick={() => handleScroll("contact")}>
              Hire Me <FiArrowRight />
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleScroll("projects")}
            >
              View Projects
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 0.8)}
            initial="hidden"
            animate="show"
            className="flex gap-4 mt-10"
          >
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan transition-all duration-300"
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Profile Image with 3D Effect */}
        <div className="md:col-span-5 flex justify-center items-center relative">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-2 border-accent-purple/30 relative flex items-center justify-center glow-purple bg-card-bg/30 backdrop-blur-md"
          >
            {/* Spinning decorative orbits */}
            <motion.div
              className="absolute inset-2 border border-dashed border-accent-cyan/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-8 border border-accent-purple/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-16 border-2 border-transparent border-t-accent-cyan rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Profile Image */}
            <div
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/20"
              style={{ transform: "translateZ(50px)" }}
            >
              <img
                src="/profile.jpg"
                alt="Basavaraj S Maneppagol"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glow rings */}
            <motion.div
              className="absolute inset-0 rounded-full border border-accent-cyan/10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-accent-purple/10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Mouse Glow Interaction */}
      <motion.div
        className="fixed w-64 h-64 rounded-full pointer-events-none z-0"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
          background:
            "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
};

export default Hero;
