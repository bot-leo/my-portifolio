
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import HomeSection from './sections/HomeSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

const PortfolioCard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleNavigate = (e: CustomEvent) => {
      setActiveSection(e.detail);
    };

    document.addEventListener('navigate', handleNavigate as EventListener);
    return () => {
      document.removeEventListener('navigate', handleNavigate as EventListener);
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto h-full flex flex-col">
      <div className="p-4 md:p-8 flex-grow flex flex-col">
        <div className="glass-card rounded-2xl shadow-glow flex-grow flex flex-col relative overflow-hidden animate-float">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <div className="relative flex-grow overflow-y-auto p-4 md:p-8">
            {activeSection === 'home' && <HomeSection active={true} />}
            {activeSection === 'experience' && <ExperienceSection active={true} />}
            {activeSection === 'projects' && <ProjectsSection active={true} />}
            {activeSection === 'about' && <AboutSection active={true} />}
            {activeSection === 'contact' && <ContactSection active={true} />}
          </div>
        </div>
      </div>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Leonardo Lima De Souza - Desenvolvedor Web & Mobile</p>
      </footer>
    </div>
  );
};

export default PortfolioCard;
