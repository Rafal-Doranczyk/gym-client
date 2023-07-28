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
  background: {
    [enums.PALETTE_MODES.DARK]: {
      default: '#17253D',
      paper: '#1B2D4B',
    },
    [enums.PALETTE_MODES.LIGHT]: {
      paper: '#FAFAFA',
      default: '#FFFFFF',
    },
  },
};

export const ThemeContext = createContext({
  mode: enums.PALETTE_MODES.DARK,
  setMode: (palette: enums.PALETTE_MODES) => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<enums.PALETTE_MODES>(enums.PALETTE_MODES.DARK);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: THEME_COLORS.primary,
          // background: {
          //   default: THEME_COLORS.background[mode].default,
          //   paper: THEME_COLORS.background[mode].paper,
          // },
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
