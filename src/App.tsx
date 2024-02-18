import { useMemo } from 'react';
import Routes from './routes';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function App() {

  const theme = createTheme(
    {
      palette: {
        primary: {
          main: '#FDEBD6'
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
