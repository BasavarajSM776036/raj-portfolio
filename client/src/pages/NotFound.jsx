import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';
import ParticleBackground from '../components/layout/ParticleBackground';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full text-white bg-cyber-bg flex items-center justify-center px-6">
      <ParticleBackground />
      <div className="relative z-10 text-center max-w-md">
        <FiAlertTriangle className="text-6xl text-red-500 mx-auto mb-6 animate-pulse" />
        <h1 className="font-cyber text-5xl font-extrabold text-white tracking-widest mb-4">
          ERROR 404
        </h1>
        <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8">
          The requested memory address or routing coordinate is unavailable or has been decommissioned from the system archives.
        </p>
        <Link to="/">
          <Button variant="primary" className="mx-auto">
            Reconnect to Main Frame
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
