
import React from 'react';
import { cn } from '@/lib/utils';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ExperienceSectionProps {
  active: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ active }) => {
  const experiences: ExperienceItem[] = [
    {
      id: 'exp1',
      company: 'TechCorp',
      position: 'Senior Frontend Developer',
      period: '2022 - Presente',
      description: 'Desenvolvimento de aplicações web complexas com React, TypeScript e GraphQL. Implementação de arquitetura de componentes escalável e reutilizável.',
      technologies: ['React', 'TypeScript', 'GraphQL', 'Redux', 'Styled Components']
    },
    {
      id: 'exp2',
      company: 'InnovaSoft',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      description: 'Desenvolvimento de interfaces de usuário responsivas para plataformas de comércio eletrônico. Implementação de testes unitários e integração contínua.',
      technologies: ['React', 'JavaScript', 'Jest', 'CSS3', 'Webpack']
    },
    {
      id: 'exp3',
      company: 'WebSolutions',
      position: 'UI Developer',
      period: '2018 - 2020',
      description: 'Desenvolvimento de interfaces de usuário para aplicativos web e móveis. Colaboração com designers para implementar designs pixel-perfect.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'SASS', 'jQuery']
    }
  ];

  return (
    <div className={cn(
      'card-content p-6 md:p-10',
      active ? 'opacity-100 z-10' : 'opacity-0 z-0'
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient flex items-center">
        <Briefcase className="mr-2" /> Experiência Profissional
      </h2>
      
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={cn(
              "relative border-l-2 border-futuristic-purple/30 pl-6 pb-2 animate-fade-in",
              {"animate-delay-100": index === 1, "animate-delay-200": index === 2}
            )}
          >
            <div className="absolute w-4 h-4 bg-futuristic-purple rounded-full -left-[9px] top-1"></div>
            
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.position}</h3>
            <p className="text-futuristic-lightpurple mb-2">{exp.company} | {exp.period}</p>
            <p className="text-gray-300 mb-4">{exp.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map(tech => (
                <span 
                  key={tech} 
                  className="bg-futuristic-purple/20 text-futuristic-lightpurple px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
