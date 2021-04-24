import { createContext, ReactNode, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import * as themes from '../styles/themes';

type ThemeState = 'light' | 'dark';

interface ThemeContextData {
  currentTheme: ThemeState;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeState>('light');

  function toggleTheme() {    
    setCurrentTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      return newTheme;
    });
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <StyledThemeProvider theme={themes[currentTheme]}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}