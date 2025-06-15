
import React from 'react';
import { User } from 'lucide-react';

interface AboutSectionProps {
  active: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ active }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient flex items-center">
        <User className="mr-2" /> Sobre mim
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
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
            <h3 className="text-xl font-bold mb-4 text-futuristic-lightpurple">Formação Academica</h3>

            <div className="mb-2">
              <p className="font-medium text-white">Bacharelado em Ciência da Computação</p>
              <p className="text-gray-400">Faculdades Metropolitanas Unidas(FMU) - 2018-2021</p>
            </div>
            <div className="mb-2">
              <p className="font-medium text-white">Tecnico em Informatica & desenvolvimento web</p>
              <p className="text-gray-400">ETEC - Escola Técnica Estadual de São Paulo - 2014-2016</p>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4 text-futuristic-lightpurple">Certificações</h3>
            <div className="mb-2">
              <p className="font-medium text-white"> Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!</p>
              <p className="text-gray-400">https://www.udemy.com/certificate/UC-3106dd8b-b870-4596-94b1-5ac9681616a9/</p>
            </div>
            <div className="mb-2">
              <p className="font-medium text-white">MBA em Engenharia de Software</p>
              <p className="text-gray-400">Instituto de Tecnologia - 2019-2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
