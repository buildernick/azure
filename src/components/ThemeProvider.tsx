'use client';

import { ReactNode } from 'react';
import { 
  FluentProvider, 
  webLightTheme, 
  Theme
} from '@fluentui/react-components';

interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

export const FluentThemeProvider = ({ 
  children, 
  theme = webLightTheme 
}: ThemeProviderProps) => {
  return (
    <FluentProvider theme={theme}>
      {children}
    </FluentProvider>
  );
};
