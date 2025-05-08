
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Linkedin } from 'lucide-react';

interface HomeSectionProps {
  active: boolean;
}

// Custom skill component with progress circle
const SkillProgressCircle = ({ name, percentage }: { name: string; percentage: number }) => {
  const circumference = 2 * Math.PI * 40; // r=40
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl">
      <div className="relative w-24 h-24 mb-3">
        <svg className="w-24 h-24 rotate-[-90deg]" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#2D1D50"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#9b87f5"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
          {percentage}%
        </div>
      </div>
      <p className="text-base font-medium">{name}</p>
    </div>
  );
};

const HomeSection: React.FC<HomeSectionProps> = ({ active }) => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left side - Profile */}
        <div className="md:w-1/3 flex flex-col items-center border-r border-white/10 pr-6">
          <Avatar className="w-40 h-40 border-4 border-futuristic-purple/30 shadow-glow mb-6">
            <AvatarImage src="/lovable-uploads/20e3eedc-db61-4130-9388-80717cb4650c.png" alt="Foto de Perfil" />
            <AvatarFallback className="bg-futuristic-purple/30 text-xl">LS</AvatarFallback>
          </Avatar>
          
          <h1 className="text-2xl font-bold mb-1">Leonardo Lima De Souza</h1>
          <h2 className="text-lg text-gray-300 mb-4">Desenvolvedor Web & Mobile</h2>
          <p className="text-gray-400 text-center mb-6">Itaqua, São Paulo Brasil</p>
          
          <div className="flex flex-col space-y-3 w-full">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border border-white/10 rounded-full py-2 px-6 hover:bg-white/5 transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border border-white/10 rounded-full py-2 px-6 hover:bg-white/5 transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border border-white/10 rounded-full py-2 px-6 hover:bg-white/5 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-5Z" />
              </svg>
              <span>Whats</span>
            </a>
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="md:w-2/3 pl-0 md:pl-8 pt-8 md:pt-0">
          <h2 className="text-3xl font-bold mb-6">Seja Bem Vindo!</h2>
          
          <p className="text-gray-300 mb-6">
            Olá, sou desenvolvedor Front-End JavaScript web & mobile. Com boas referências de designer, sempre seguindo os principais padrões de UX & UI e design system para um layout mais inteligente e eficiente. Como principal Stack junto ao JS utilizo a biblioteca ReactJS e frameworks CSS para complementar.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <SkillProgressCircle name="ReactJS" percentage={99} />
            <SkillProgressCircle name="ReactNative" percentage={100} />
            <SkillProgressCircle name="JavaScript" percentage={88} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
