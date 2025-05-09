
import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from './ThemeProvider';

interface NavigationItem {
  id: string;
  label: string;
}

interface NavigationProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const { theme } = useTheme();
  const navItems: NavigationItem[] = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre' },
    { id: 'experience', label: 'Experiência' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <nav className="flex justify-center mt-6 mb-2 md:mt-8 md:mb-4">
      <ul className="flex space-x-2 md:space-x-6 flex-wrap justify-center">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveSection(item.id)}
              className={cn(
                'px-6 py-2 rounded-full transition-all duration-300',
                activeSection === item.id
                  ? theme === 'dark' 
                    ? 'bg-white text-futuristic-darkpurple' 
                    : 'bg-futuristic-darkpurple text-white'
                  : theme === 'dark'
                    ? 'text-gray-200 hover:bg-white/10'
                    : 'text-gray-600 hover:bg-black/10'
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
