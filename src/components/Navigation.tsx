
import React from 'react';
import { Home, Briefcase, Folder, User, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface NavigationProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems: NavigationItem[] = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'experience', label: 'Experiência', icon: Briefcase },
    { id: 'projects', label: 'Projetos', icon: Folder },
    { id: 'about', label: 'Sobre', icon: User },
    { id: 'contact', label: 'Contato', icon: Mail },
  ];

  return (
    <nav className="flex justify-center mt-8 mb-4 md:mt-10 md:mb-6">
      <ul className="flex space-x-2 md:space-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveSection(item.id)}
              className={cn(
                'flex flex-col items-center transition-all duration-300 p-2 rounded-lg',
                activeSection === item.id
                  ? 'text-futuristic-purple scale-110'
                  : 'text-gray-400 hover:text-futuristic-lightpurple'
              )}
              aria-label={item.label}
            >
              <item.icon size={20} className="mb-1" />
              <span className="text-xs md:text-sm">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
