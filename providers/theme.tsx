'use client';

import { ReactNode, createContext, useMemo, useState } from 'react';
import { ThemeProvider as MaterialProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { enums } from 'gym-shared';

const THEME_COLORS = {
  primary: {
    light: '#FEF697',
    main: '#EBC324',
    dark: '#D9AA0C',
  },
  secondary: {
    light: '#6D6F6F',
    main: '#5C5F5F',
    dark: '#4B4E4E',
  },
};

export const ThemeContext = createContext({
  mode: enums.PALETTE_MODES.DARK,
  setMode: (_: enums.PALETTE_MODES) => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<enums.PALETTE_MODES>(enums.PALETTE_MODES.DARK);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: THEME_COLORS.primary,
          secondary: THEME_COLORS.secondary,
        },
      }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <MaterialProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </MaterialProvider>
    </ThemeContext.Provider>
  );
}
