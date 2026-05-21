import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import Loader from "../common/Loader";
import { fadeIn } from "../../utils/motion";
import {
  FiSend,
  FiGithub,
  FiLinkedin,
  FiMessageSquare,
  FiMail,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const socialLinks = [
    {
      icon: FiMessageSquare,
      url: "https://wa.me/917760369208",
      label: "WhatsApp",
    },
    {
      icon: FiGithub,
      url: "https://github.com/BasavarajSM776036",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      url: "https://linkedin.com/in/basavaraj-satteppamaneppagol-b5bb72383",
      label: "LinkedIn",
    },
    {
      icon: FiMail,
      url: "mailto:basavarajmaneppagol7760@gmail.com",
      label: "Email",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: `Error: ${data.error || "Something went wrong"}`,
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Cannot connect to server. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col text-center mb-16">
          <motion.h2
            variants={fadeIn("down", "tween", 0.1, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg text-text-secondary font-body"
          >
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Form */}
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-heading tracking-wide text-text-muted mb-2 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-card-bg/30 border border-white/10 rounded-xl px-5 py-4 text-white font-body text-base focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/30 outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-heading tracking-wide text-text-muted mb-2 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-card-bg/30 border border-white/10 rounded-xl px-5 py-4 text-white font-body text-base focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/30 outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-heading tracking-wide text-text-muted mb-2 uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-card-bg/30 border border-white/10 rounded-xl px-5 py-4 text-white font-body text-base focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/30 outline-none transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-xl border text-sm font-body ${
                      status.type === "success"
                        ? "bg-green-500/10 border-green-500/30 text-green-400"
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader size="small" />
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <FiSend />
                      </span>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Contact Info Cards */}
          <motion.div
            variants={fadeIn("left", "tween", 0.4, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-5 glass-card rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center flex-shrink-0">
                  <social.icon className="text-accent-purple" size={22} />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-heading font-semibold">
                    {social.label}
                  </h4>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
