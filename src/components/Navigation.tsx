
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from './ThemeProvider';
import { Menu } from 'lucide-react';
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from './ui/sheet';

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
  const [open, setOpen] = useState(false);
  
  const navItems: NavigationItem[] = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre' },
    { id: 'experience', label: 'Experiência' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ];

  const handleItemClick = (id: string) => {
    setActiveSection(id);
    setOpen(false);
  };

  // Desktop navigation
  const DesktopNav = () => (
    <ul className="hidden md:flex space-x-6 flex-wrap justify-center">
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
  );
  
  // Mobile navigation
  const MobileNav = () => (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button 
            className={cn(
              'p-2 rounded-full',
              theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-black/5 hover:bg-black/10 text-gray-800'
            )}
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>
        <SheetContent side="top" className={cn(
          'pt-12',
          theme === 'dark'
            ? 'bg-futuristic-darkpurple border-white/10'
            : 'bg-white border-gray-200'
        )}>
          <ul className="flex flex-col space-y-2 mt-4">
            {navItems.map((item) => (
              <li key={item.id} className="w-full">
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={cn(
                    'w-full px-6 py-3 rounded-lg transition-all duration-300 flex justify-center',
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
                  <span className="text-base font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );

  return (
    <nav className="flex justify-center mt-6 mb-2 md:mt-8 md:mb-4">
      <DesktopNav />
      <MobileNav />
    </nav>
  );
};

export default Navigation;
