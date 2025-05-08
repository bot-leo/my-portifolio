
import React from 'react';
import PortfolioCard from '@/components/PortfolioCard';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      {/* Efeitos de fundo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-futuristic-purple/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-futuristic-blue/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Partículas (opcional) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          ></div>
        ))}
      </div>
      
      {/* Cartão de portfólio principal */}
      <PortfolioCard />
    </div>
  );
};

export default Index;
