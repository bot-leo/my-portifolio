
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
        {/* Left side - Profile - Full width on mobile */}
        <div className="md:w-1/3 w-full flex flex-col items-center md:border-r border-white/10 md:pr-6 mb-8 md:mb-0">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-futuristic-purple/30 shadow-glow mb-6">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQHYOBTBd-SJcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688691094693?e=1752105600&v=beta&t=CDqA8w836GZkPzZl9eIIxVrAWWq6ByYR-ZWKwZ6NffU" alt="Foto de Perfil" />
            <AvatarFallback className="bg-futuristic-purple/30 text-xl">LL</AvatarFallback>
          </Avatar>

          <h1 className="text-xl md:text-2xl font-bold mb-1">Leonardo Lima De Souza</h1>
          <h2 className="text-base md:text-lg text-gray-300 mb-4">Desenvolvedor Front-End JS</h2>
          <p className="text-gray-400 text-center mb-6">São Paulo Brasil</p>

          {/* Social icons - Row on mobile, Column on desktop */}
          <div className="flex flex-row md:flex-col space-y-0 space-x-4 md:space-x-0 md:space-y-3 w-full justify-center md:justify-start">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-white/10 md:rounded-full rounded-full md:py-2 md:px-6 p-3 hover:bg-white/5 transition-colors"
            >
              <Github size={18} className="md:mr-2" />
              <span className="hidden md:inline">GitHub</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-white/10 md:rounded-full rounded-full md:py-2 md:px-6 p-3 hover:bg-white/5 transition-colors"
            >
              <Linkedin size={18} className="md:mr-2" />
              <span className="hidden md:inline">LinkedIn</span>
            </a>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-white/10 md:rounded-full rounded-full md:py-2 md:px-6 p-3 hover:bg-white/5 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:mr-2">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-5Z" />
              </svg>
              <span className="hidden md:inline">Whats</span>
            </a>
          </div>
        </div>

        {/* Right side - Content - Full width on mobile */}
        <div className="md:w-2/3 w-full pl-0 md:pl-8 pt-0 md:pt-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Olá Bem Vindo!</h2>

          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Com foco total em JavaScript, venho me especializando em Front-End. Desenvolvo layouts performáticos e adaptáveis utilizando as principais ferramentas e tecnologias do mercado. Sempre baseado em princípios de design e padrões de UX/UI, busco trazer sutileza e praticidade a cada linha de código.
            <br />
            <br />
            Dominando ReactJS, considero o Clean Code e os princípios do S.O.L.I.D. como práticas fundamentais para o desenvolvimento de projetos sólidos, seguros e performáticos, sempre com foco na manutenção e escalabilidade da aplicação.
            <br />
            <br />
            Como grande entusiasta de tecnologia, combino abordagens tradicionais com métodos modernos para oferecer soluções consistentes e atualizadas, sempre priorizando a acessibilidade do usuário e uma arquitetura de componentes que favoreça a reutilização de código, seja na depuração de funcionalidades ou na realização de testes da aplicação.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
