"use client";

import { ReactNode } from "react";
import {
  FluentProvider,
  webLightTheme,
  Theme,
  SSRProvider,
} from "@fluentui/react-components";

interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

export const FluentThemeProvider = ({
  children,
  theme = webLightTheme,
}: ThemeProviderProps) => {
  return (
    <SSRProvider>
      <FluentProvider theme={theme}>{children}</FluentProvider>
    </SSRProvider>
  );
};
