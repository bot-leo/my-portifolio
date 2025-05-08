
import React from 'react';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface AboutSectionProps {
  active: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ active }) => {
  const skills: Skill[] = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Redux', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  return (
    <div className={cn(
      'card-content p-6 md:p-10',
      active ? 'opacity-100 z-10' : 'opacity-0 z-0'
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient flex items-center">
        <User className="mr-2" /> Sobre mim
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="animate-fade-in">
          <h3 className="text-xl font-bold mb-4 text-futuristic-lightpurple">Quem sou</h3>
          <p className="text-gray-300 mb-4">
            Sou um desenvolvedor frontend apaixonado por criar experiências web incríveis e de alto desempenho.
            Com mais de 5 anos de experiência no desenvolvimento de aplicações web modernas, 
            especializei-me em React, TypeScript e arquitetura de software.
          </p>
          <p className="text-gray-300">
            Minha abordagem combina princípios de design limpo e boas práticas de desenvolvimento,
            sempre buscando soluções elegantes para problemas complexos. Tenho grande interesse
            em acessibilidade, performance e arquitetura de componentes reutilizáveis.
          </p>
          
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4 text-futuristic-lightpurple">Formação</h3>
            <div className="mb-2">
              <p className="font-medium text-white">Bacharelado em Ciência da Computação</p>
              <p className="text-gray-400">Universidade Federal - 2014-2018</p>
            </div>
            <div className="mb-2">
              <p className="font-medium text-white">MBA em Engenharia de Software</p>
              <p className="text-gray-400">Instituto de Tecnologia - 2019-2021</p>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in animate-delay-100">
          <h3 className="text-xl font-bold mb-4 text-futuristic-lightpurple">Habilidades</h3>
          <div className="space-y-4">
            {skills.map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-futuristic-purple">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-futuristic-purple to-futuristic-blue"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-futuristic-lightpurple">Idiomas</h3>
            <div className="space-y-2">
              <p className="text-white">Português <span className="text-gray-400">(Nativo)</span></p>
              <p className="text-white">Inglês <span className="text-gray-400">(Fluente)</span></p>
              <p className="text-white">Espanhol <span className="text-gray-400">(Intermediário)</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
