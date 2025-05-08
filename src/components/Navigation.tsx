
import React from 'react';
import { cn } from '@/lib/utils';

interface NavigationItem {
  id: string;
  label: string;
}

interface NavigationProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems: NavigationItem[] = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre' },
    { id: 'experience', label: 'Formação' },
    { id: 'projects', label: 'Projetos' },
  ];

  return (
    <nav className="flex justify-center mt-8 mb-4 md:mt-10 md:mb-6">
      <ul className="flex space-x-2 md:space-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveSection(item.id)}
              className={cn(
                'px-6 py-2 rounded-full transition-all duration-300',
                activeSection === item.id
                  ? 'bg-white text-futuristic-darkpurple'
                  : 'text-gray-200 hover:bg-white/10'
              )}
              aria-label={item.label}
            >
              <span className="text-sm md:text-base font-medium">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
