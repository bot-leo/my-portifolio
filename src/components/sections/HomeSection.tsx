
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
        <div className="animate-fade-in text-center">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 border-4 border-futuristic-purple/30 shadow-glow">
            <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Foto de Perfil" />
            <AvatarFallback className="bg-futuristic-purple/30 text-xl md:text-2xl">LD</AvatarFallback>
          </Avatar>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            Lucas Developer
          </h1>
          <h2 className="text-xl md:text-2xl text-futuristic-lightpurple mb-6">
            Especialista Frontend React
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-4 text-gray-300">
            <p>
              Aos 27 anos, minha jornada na tecnologia começou com uma curiosidade sobre como os sites eram construídos. 
              O que começou como um hobby transformou-se em uma paixão quando descobri o poder do JavaScript e do React 
              para criar interfaces interativas.
            </p>
            <p>
              Com mais de 5 anos de experiência em desenvolvimento frontend, especializo-me em criar experiências 
              digitais que combinam design e funcionalidade. Minha trajetória profissional inclui trabalhos em empresas 
              de tecnologia de diversos portes, sempre com foco em código limpo e interfaces intuitivas.
            </p>
            <p>
              Atualmente trabalho com ReactJS e React Native, focando em soluções escaláveis e de alta performance 
              que entregam valor real aos usuários finais.
            </p>
          </div>
          
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
