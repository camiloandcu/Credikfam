import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './styles/theme';
import AppRoutes from './routes';
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar />
        <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          minHeight: '100vh',
          py: 5
        }}
      >
          <AppRoutes />
      </Box>
      </CssBaseline>
    </ThemeProvider>      
  );
}

export default App;
