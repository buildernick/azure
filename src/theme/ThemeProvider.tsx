import React, { createContext, useContext, useState, useEffect } from 'react';
import { FluentProvider } from '@fluentui/react-components';
import { designTokens, azureLightTheme, azureDarkTheme } from './designTokens';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Check system preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Update designTokens.current
    designTokens.current = prefersDark ? azureDarkTheme : azureLightTheme;
  }, []);
  
  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      designTokens.current = newMode ? azureDarkTheme : azureLightTheme;
      return newMode;
    });
  };
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <FluentProvider theme={isDarkMode ? azureDarkTheme : azureLightTheme}>
        {children}
      </FluentProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
