
import React, { useState } from 'react';
import PortfolioCard from '@/components/PortfolioCard';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/components/ThemeProvider';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const Index: React.FC = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre' },
    { id: 'experience', label: 'Experiência' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ];

  const handleItemClick = (id: string) => {
    const event = new CustomEvent('navigate', { detail: id });
    document.dispatchEvent(event);
    setOpen(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      {/* Mobile Navigation Button (Top Left) */}
      {isMobile && (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button 
              className={cn(
                'fixed top-4 left-4 z-50 h-9 w-9 md:h-10 md:w-10 rounded-full flex items-center justify-center',
                theme === 'dark'
                  ? 'bg-white/10 backdrop-blur hover:bg-white/20 text-white'
                  : 'bg-black/5 backdrop-blur hover:bg-black/10 text-gray-800'
              )}
              aria-label="Menu"
            >
              <Menu className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className={cn(
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
                      theme === 'dark'
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
      )}
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-futuristic-purple/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-futuristic-blue/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Particles (optional) */}
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
      
      {/* Main portfolio card */}
      <PortfolioCard />
    </div>
  );
};

export default Index;
