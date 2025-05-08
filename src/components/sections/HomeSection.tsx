
import React from 'react';
import { cn } from '@/lib/utils';

interface HomeSectionProps {
  active: boolean;
}

const HomeSection: React.FC<HomeSectionProps> = ({ active }) => {
  return (
    <div className={cn(
      'card-content p-6 md:p-10',
      active ? 'opacity-100 z-10' : 'opacity-0 z-0'
    )}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            Olá, sou Desenvolvedor
          </h1>
          <h2 className="text-xl md:text-2xl text-futuristic-lightpurple mb-6">
            Especialista Frontend React
          </h2>
          <p className="text-gray-300 max-w-lg mx-auto text-center">
            Crio interfaces modernas e responsivas com foco em performance e experiência do usuário. 
            Com expertise em ReactJS e TypeScript, transformo designs em código elegante e funcional.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a 
              href="#experience" 
              onClick={(e) => {
                e.preventDefault();
                document.dispatchEvent(new CustomEvent('navigate', { detail: 'experience' }));
              }}
              className="bg-futuristic-purple hover:bg-futuristic-purple/90 text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              Ver experiência
            </a>
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.dispatchEvent(new CustomEvent('navigate', { detail: 'projects' }));
              }}
              className="border border-futuristic-purple text-futuristic-purple px-6 py-3 rounded-lg hover:bg-futuristic-purple/10 transition-all duration-300"
            >
              Ver projetos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
