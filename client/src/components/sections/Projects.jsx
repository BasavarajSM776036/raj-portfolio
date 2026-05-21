import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Card from "../common/Card";
import Button from "../common/Button";
import { fadeIn } from "../../utils/motion";
import {
  FiExternalLink,
  FiGithub,
  FiFolder,
  FiMaximize2,
} from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      id: "pharmacy-inventory-erp",
      title: "Pharmacy Inventory & Billing ERP System",
      desc: "Full-stack ERP system for pharmacy inventory, GST billing, stock tracking, customer management, supplier handling, and analytics.",
      tags: ["React", "Node.js", "Express", "Tailwind", "MySQL"],
      github: "https://github.com/BasavarajSM776036/pharmacy-inventory-erp",
      demo: null,
      glow: "blue",
      image: "/pharma.jpg",
    },
    {
      id: "document-forgery-detection",
      title: "Document Forgery Detection System",
      desc: "Secure document forgery detection system with authentication, protected routes, file upload, and API integration.",
      tags: ["React", "Node.js", "Express"],
      github:
        "https://github.com/BasavarajSM776036/Document-Forgery-Detection-System",
      demo: "https://basavaraj-mpdocument-forgery.netlify.app/",
      glow: "purple",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      id: "paytm-clone",
      title: "Paytm Payment Interface Clone",
      desc: "Responsive Paytm-inspired payment interface with modern UI and mobile-first design.",
      tags: ["HTML", "Tailwind"],
      github: "https://github.com/BasavarajSM776036/MeraPaytm",
      demo: "https://basavarajpaymentinterface.netlify.app/",
      glow: "blue",
      image: "/paytm.jpg",
    },
    {
      id: "netflix-clone",
      title: "Netflix Clone",
      desc: "Modern Netflix-inspired landing page with responsive UI.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/BasavarajSM776036/Netflix-clone",
      demo: null,
      glow: "purple",
      image:
        "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop",
    },
    {
      id: "face-detection",
      title: "Face Detection System",
      desc: "Real-time face detection using OpenCV and deep learning models.",
      tags: ["Python", "OpenCV"],
      github: "https://github.com/BasavarajSM776036/facedetection",
      demo: null,
      glow: "blue",
      image: "/face-detection.jpg",
    },
  ];

  const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);
      x.set(mouseX);
      y.set(mouseY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        variants={fadeIn("up", "tween", 0.3 + index * 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="h-full"
        >
          <Card
            key={project.id}
            glowColor={project.glow}
            className="flex flex-col justify-between h-full border border-white/5 overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-t-xl -mx-6 -mt-6 mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative h-48 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="glass rounded-full p-2"
                  >
                    <FiFolder
                      className={
                        project.glow === "blue"
                          ? "text-accent-cyan"
                          : "text-accent-purple"
                      }
                      size={20}
                    />
                  </motion.div>
                  {project.demo && (
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="glass rounded-full p-2"
                    >
                      <FiExternalLink className="text-white" size={20} />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="flex-1">
              <h3 className="font-heading text-xl font-bold text-white mb-3 tracking-wider text-left">
                {project.title}
              </h3>
              <p className="text-text-secondary font-body text-sm text-left leading-relaxed mb-6">
                {project.desc}
              </p>

              {/* Animated Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIdx) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + tagIdx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`text-xs tracking-wider uppercase font-heading font-medium px-3 py-1 rounded-full border ${
                      project.glow === "blue"
                        ? "bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan"
                        : "bg-accent-purple/10 border-accent-purple/30 text-accent-purple"
                    }`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Interactive Buttons */}
            <div className="flex flex-wrap gap-3">
              {project.demo && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant={
                        project.glow === "purple" ? "secondary" : "primary"
                      }
                      className="w-full"
                    >
                      Live Demo <FiExternalLink />
                    </Button>
                  </a>
                </motion.div>
              )}
              {project.github && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={project.demo ? "flex-1" : "w-full"}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">
                      View Code <FiGithub />
                    </Button>
                  </a>
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="flex flex-col text-center mb-16">
        <motion.h2
          variants={fadeIn("down", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-heading"
        >
          My Projects
        </motion.h2>
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-line"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
