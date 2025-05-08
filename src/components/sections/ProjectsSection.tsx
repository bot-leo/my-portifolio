import React from 'react';
import { cn } from '@/lib/utils';
import { Folder, Link, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

interface ProjectsSectionProps {
  active: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ active }) => {
  const projects: Project[] = [
    {
      id: 'proj1',
      title: 'E-commerce Dashboard',
      description: 'Dashboard administrativo para gerenciamento de produtos, pedidos e clientes. Implementado com React, TypeScript e Material UI.',
      technologies: ['React', 'TypeScript', 'Material UI', 'Chart.js'],
      demoUrl: '#',
      githubUrl: '#',
      imageUrl: 'https://via.placeholder.com/300x160'
    },
    {
      id: 'proj2',
      title: 'Streaming App',
      description: 'Plataforma de streaming com funcionalidades de busca, favoritos e reprodução de vídeos. Desenvolvido com React, Redux e Firebase.',
      technologies: ['React', 'Redux', 'Firebase', 'SCSS'],
      demoUrl: '#',
      githubUrl: '#',
      imageUrl: 'https://via.placeholder.com/300x160'
    },
    {
      id: 'proj3',
      title: 'Rede Social',
      description: 'Aplicativo de rede social com recursos de chat em tempo real, feed de notícias e perfil de usuário. Construído com MERN stack.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
      demoUrl: '#',
      githubUrl: '#',
      imageUrl: 'https://via.placeholder.com/300x160'
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient flex items-center">
        <Folder className="mr-2" /> Projetos
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={cn(
              "bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-futuristic-purple/30 transition-all duration-300",
              {"animate-delay-100": index === 1, "animate-delay-200": index === 2}
            )}
          >
            {project.imageUrl && (
              <div className="h-40 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
            
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="bg-futuristic-purple/20 text-futuristic-lightpurple px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-futuristic-purple hover:text-futuristic-lightpurple text-sm"
                  >
                    <Link size={16} className="mr-1" /> Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-futuristic-purple hover:text-futuristic-lightpurple text-sm"
                  >
                    <Github size={16} className="mr-1" /> Código
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
