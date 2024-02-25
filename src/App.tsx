import { useMemo } from 'react';
import Routes from './routes';
import { PaletteColorOptions, PaletteOptions, createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

declare module '@mui/material/styles' {
  interface CustomPalette {
    black: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true;
  }
}


function App() {

  const theme = createTheme(
    {
      palette: {
        primary: {
          main: '#FDEBD6',
        },
        secondary: {
          main: '#FFD49F'
        },
        black: {
          main: '#000000',
          light: '#000000',
          dark: '#000000',
          contrastText: '#000000'
        }
      },
      typography: {
        fontFamily: 'Poppins',
        body1: {
          fontSize: '16px'
        },
        body2: {
          fontSize: '20px'
        },
        subtitle1: {
          fontSize: '24px'
        },
        h1: {
          fontSize: '42px'
        },
        h2: {
          fontSize: '34px'
        }
      }
    }
  );
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    </>
  )
}

export default App
