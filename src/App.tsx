import { useMemo } from 'react';
import Routes from './routes';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function App() {

  const theme = createTheme(
    {
      palette: {
        primary: {
          main: '#FDEBD6',
        },
        secondary: {
          main: '#FFD49F'
        }
      },
      typography: {
        fontFamily: 'Poppins',
        body1: {
          fontSize: '16px'
        },
        body2: {
          fontSize: '20px'
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
