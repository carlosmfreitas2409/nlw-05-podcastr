import { ReactNode } from "react";

import { PlayerProvider } from "./usePlayer";
import { ThemeProvider } from "./useTheme";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      <PlayerProvider>
        {children}
      </PlayerProvider>
    </ThemeProvider>
  );
}