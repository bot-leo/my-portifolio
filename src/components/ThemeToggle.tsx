
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Toggle } from './ui/toggle';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ThemeToggleProps {
  insideCard?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ insideCard = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();

  return (
    <Toggle 
      aria-label="Toggle theme" 
      pressed={theme === 'dark'} 
      onPressedChange={toggleTheme}
      className={cn(
        isMobile && insideCard 
          ? "text-foreground" // Just the icon without background for mobile inside card
          : cn(
              "h-9 w-9 md:h-10 md:w-10 rounded-full backdrop-blur hover:bg-white/20",
              theme === 'dark'
                ? "bg-white/10 text-white"
                : "bg-black/5 text-gray-800"
            ),
        !insideCard && "fixed top-4 right-4 z-50" // Only fixed position when not inside card
      )}
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 md:h-5 md:w-5" />
      ) : (
        <Moon className="h-4 w-4 md:h-5 md:w-5" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
