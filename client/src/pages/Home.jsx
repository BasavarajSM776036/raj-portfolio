import React, { useState, useEffect } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Achievements from "../components/sections/Achievements";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LoadingScreen from "../components/layout/LoadingScreen";
import ScrollToTop from "../components/layout/ScrollToTop";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden bg-primary">
      {/* Gradient blobs for background effect */}
      <div className="gradient-blob w-96 h-96 bg-purple-600/20 top-0 -left-48" />
      <div
        className="gradient-blob w-80 h-80 bg-cyan-500/20 bottom-0 -right-40"
        style={{ animationDelay: "3s" }}
      />

      <LoadingScreen isLoading={isLoading} />
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
