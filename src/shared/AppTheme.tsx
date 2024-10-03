import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
interface AppThemeProps {
  children: React.ReactNode;
}

export default function AppTheme({
  children
}: AppThemeProps) {
  const theme = createTheme({
    palette: {
      background: {
        default: 
   '#f0f0f0',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}