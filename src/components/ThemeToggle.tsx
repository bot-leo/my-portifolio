
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Toggle } from './ui/toggle';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle 
      aria-label="Toggle theme" 
      pressed={theme === 'dark'} 
      onPressedChange={toggleTheme}
      className="fixed top-4 right-4 z-50 h-10 w-10 rounded-full bg-white/10 backdrop-blur hover:bg-white/20"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
