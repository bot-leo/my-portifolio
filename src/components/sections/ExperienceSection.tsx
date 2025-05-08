
import React from 'react';
import { cn } from '@/lib/utils';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies?: string[];
}

interface ExperienceSectionProps {
  active: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ active }) => {
  const experiences: ExperienceItem[] = [
    {
      id: 'exp1',
      company: 'Mult-Connect',
      position: 'Desenvolvedor Front-End ReactJS/Javascript',
      period: '08/2022 - Atual',
      description: [
        'Manutenção e migração de código class component para function componente ReactJS',
        'Pré-Processadores CSS como Sass',
        'Construção de layouts com ReactJS',
        'Deploy e pipelines Azure DevOps',
        'Manutenção de código Vue.JS',
        'Testes unitários com Cypress e React Testing libray',
        'Typescript',
        'Gerenciamento de projetos com Azure',
        'Metodologias ágeis',
        'Criação de sites institucionais com WordPress'
      ],
      technologies: ['React', 'TypeScript', 'SASS', 'Vue.js', 'Cypress', 'Azure DevOps', 'WordPress']
    },
    {
      id: 'exp2',
      company: 'Ecostage (CodeGroup)',
      position: 'Desenvolvedor Front-End ReactJS/Native Javascript',
      period: '07/2022 - 03/2023',
      description: [
        'Documentação de componentes no StoryBook',
        'Consumo de api\'s com GraphQL (Apollo GraphQL)',
        'Deploy e publicação de biblioteca de componentes React no NPM',
        'Desenvolvimento de componentes compartilhados em plataforma React Native Web',
        'Renderizações de mapas com LeafLet',
        'Desenvolvimento com MicroFront-End para unificar plataforma',
        'EXPO no desenvolvimento mobile',
        'Publicação de aplicativos em loja Google Play Store & Apple Store',
        'Manutenções em código Vue.JS',
        'Boas práticas para código limpo e reutilização na aplicação'
      ],
      technologies: ['React', 'React Native', 'GraphQL', 'StoryBook', 'LeafLet', 'MicroFront-End', 'EXPO', 'Vue.js']
    },
    {
      id: 'exp3',
      company: 'UpBase Technology Consulting',
      position: 'Desenvolvedor Front-End ReactJS',
      period: '02/2020 - 07/2022',
      description: [
        'Manutenção em Class Component React & React Native',
        'Versionamento de código com Git & BitBucket',
        'Gerenciamento de projetos com Azure DevOps, Jira & Trello',
        'Framework NextJS em aplicações server-side render',
        'Construção de Layouts com Biblioteca ReactJS & React Native',
        'Bibliotecas CSS como Tailwind CSS, Styled-Componentes e Sass',
        'Estados globais com Redux & ContextAPI',
        'Desenvolvimento de componentes com MaterialUI',
        'TypeScript para tipagem de dados',
        'Metodologias ágeis Kaban & Scrum'
      ],
      technologies: ['React', 'React Native', 'NextJS', 'Tailwind CSS', 'Styled Components', 'SASS', 'Redux', 'ContextAPI', 'MaterialUI', 'TypeScript']
    },
    {
      id: 'exp4',
      company: 'Consultor Independente (Atatica & 2EBrain)',
      position: 'Developer Front-End ReactJS/ReactNative',
      period: '02/2021 - 07/2022',
      description: [
        'Desenvolvimento de layout propostos com FrameWorks javascript',
        'Armazenamento de dados com LocalStorage',
        'Consumo de API\'s documentadas no Swagger',
        'Gerenciamento de estados com Redux',
        'Consulta de requisições via Insominia',
        'Construção de componentes reutilizáveis',
        'Versionamento de código com GitHub e GitLAB',
        'Gestão de tarefas com Trello'
      ],
      technologies: ['React', 'React Native', 'Redux', 'LocalStorage', 'REST API', 'GitHub', 'GitLab', 'Trello']
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
      
      <div className="space-y-10 overflow-y-auto pr-2 max-h-[calc(100vh-200px)]">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={cn(
              "relative border-l-2 border-futuristic-purple/30 pl-6 pb-4 animate-fade-in",
              {"animate-delay-100": index === 1, "animate-delay-200": index === 2, "animate-delay-300": index === 3}
            )}
          >
            <div className="absolute w-4 h-4 bg-futuristic-purple rounded-full -left-[9px] top-1"></div>
            
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.company}</h3>
            <p className="text-futuristic-lightpurple mb-2">{exp.position} | {exp.period}</p>
            
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
              {exp.description.map((item, idx) => (
                <li key={idx} className="ml-4">{item}</li>
              ))}
            </ul>
            
            {exp.technologies && (
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="bg-futuristic-purple/20 text-futuristic-lightpurple px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
