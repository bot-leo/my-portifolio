
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import HomeSection from './sections/HomeSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import { ScrollArea } from './ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
import ThemeToggle from './ThemeToggle';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { cn } from '@/lib/utils';
import { useTheme } from './ThemeProvider';

const PortfolioCard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();
  const { theme } = useTheme();
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

  useEffect(() => {
    const handleNavigate = (e: CustomEvent) => {
      setActiveSection(e.detail);
    };

    document.addEventListener('navigate', handleNavigate as EventListener);
    return () => {
      document.removeEventListener('navigate', handleNavigate as EventListener);
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto h-full flex flex-col px-4 md:px-8">
      <div className="py-4 md:py-8 flex-grow flex flex-col">
        <div className={`glass-card rounded-2xl shadow-glow flex flex-col relative overflow-hidden ${!isMobile ? 'animate-float' : ''} h-[80vh] md:h-[70vh]`}>
          {/* Mobile Navigation Buttons */}
          {isMobile && (
            <div className="flex justify-between items-center absolute top-4 left-0 right-0 px-4 z-10">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <button 
                    className="text-foreground"
                    aria-label="Menu"
                  >
                    <Menu className="h-6 w-6" />
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
              <ThemeToggle insideCard={true} />
            </div>
          )}
          
          {/* Desktop Navigation */}
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <ScrollArea className="flex-grow p-4 md:p-8">
            {activeSection === 'home' && <HomeSection active={true} />}
            {activeSection === 'experience' && <ExperienceSection active={true} />}
            {activeSection === 'projects' && <ProjectsSection active={true} />}
            {activeSection === 'about' && <AboutSection active={true} />}
            {activeSection === 'contact' && <ContactSection active={true} />}
          </ScrollArea>
        </div>
      </div>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Leonardo Lima De Souza - Desenvolvedor Web & Mobile</p>
      </footer>
    </div>
  );
};

export default PortfolioCard;
