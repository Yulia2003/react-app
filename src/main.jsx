// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'; // Импорт Chakra UI
import App from './App.jsx'; // Подключение корневого компонента
import './index.css'; // Подключение стилей

// Настройка темы
const theme = extendTheme({
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  colors: {
    brand: {
      50: '#f5f7ff',
      100: '#e6ecff',
      200: '#ccd3ff',
      300: '#b2baff',
      400: '#99a2ff',
      500: '#7f89ff',
      600: '#5f66cc',
      700: '#4a5199',
      800: '#343b66',
      900: '#1f2633',
    },
  },
});

// Рендеринг приложения
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
