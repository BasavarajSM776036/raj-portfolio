import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCpu, FiLayout, FiMail } from 'react-icons/fi';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ParticleBackground from '../components/layout/ParticleBackground';
import Card from '../components/common/Card';

const ProjectDetails = () => {
  const { id } = useParams();

  const projectDetails = {
    'cyber-vault': {
      title: 'Cyber Vault',
      icon: <FiCpu className="text-4xl text-cyber-blue" />,
      desc: 'An advanced digital safety box for confidential information. Cyber Vault implements asymmetric encryption schemes directly on the frontend and communicates through secured REST APIs.',
      tech: ['React', 'Vite', 'Express', 'Tailwind v4', 'Web Crypto API'],
      features: [
        'Client-side AES-GCM cryptography encryption keys.',
        'Secured, JSON Web Token (JWT) token sessions.',
        'Custom dashboard showing system telemetry data.'
      ],
      glow: 'blue'
    },
    'synapse-ai': {
      title: 'Synapse AI',
      icon: <FiLayout className="text-4xl text-cyber-purple" />,
      desc: 'Synapse AI is a dynamic node-based visual workspace that charts connections and neural nodes dynamically. Designed to optimize teamwork sessions using reactive canvas particles.',
      tech: ['React.js', 'tsParticles', 'Framer Motion', 'Tailwind', 'Vite'],
      features: [
        'Dynamic node rendering with custom connection wires.',
        'Smooth zoom, pan, and dragging controls.',
        'Preconfigured animation workflows for fast navigation.'
      ],
      glow: 'purple'
    },
    'quantum-mail': {
      title: 'Quantum Mailer',
      icon: <FiMail className="text-4xl text-cyber-green" />,
      desc: 'A robust email transmission microservice that coordinates SMTP handshakes and handles email dispatch flows for customer contacts.',
      tech: ['Node.js', 'Express.js', 'Nodemailer', 'dotenv', 'CORS'],
      features: [
        'Secure SMTP authentication setups.',
        'Spam-checking filters and validation schemas.',
        'Clean API endpoint designed for third-party integrations.'
      ],
      glow: 'green'
    }
  };

  const project = projectDetails[id] || {
    title: 'Unknown Registry',
    icon: <FiCpu className="text-4xl text-red-500" />,
    desc: 'The requested system specification is not currently registered inside our database directories.',
    tech: [],
    features: [],
    glow: 'blue'
  };

  return (
    <div className="relative min-h-screen w-full text-white bg-cyber-bg">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-24 text-left">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyber-blue mb-8 transition-colors duration-200 font-cyber text-sm">
          <FiArrowLeft /> Return to Main Frame
        </Link>

        <Card glowColor={project.glow} className="border border-white/5 p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 border-b border-white/5 pb-8">
            <div className="flex items-center gap-4">
              {project.icon}
              <h1 className="font-cyber text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                {project.title}
              </h1>
            </div>
            <span className="text-[10px] tracking-wider uppercase font-cyber px-3 py-1 rounded bg-white/5 border border-white/10 text-gray-400">
              ID: {id}
            </span>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-cyber text-lg font-bold text-gray-300 mb-3 uppercase tracking-wider">System Overview</h2>
              <p className="text-gray-400 leading-relaxed font-sans">{project.desc}</p>
            </div>

            {project.features.length > 0 && (
              <div>
                <h2 className="font-cyber text-lg font-bold text-gray-300 mb-3 uppercase tracking-wider">Core Parameters</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-400 font-sans">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="font-cyber text-lg font-bold text-gray-300 mb-3 uppercase tracking-wider">Technology Registry</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-cyber border border-white/10 bg-cyber-dark/40 px-3 py-1 rounded text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
