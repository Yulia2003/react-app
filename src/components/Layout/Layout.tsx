import React from 'react';
import { Box } from '@chakra-ui/react';
import { Header } from '../Header/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      minHeight="100vh"
      width="100%"
      bgGradient="linear(135deg, wheat, lightblue)"  // Градиентный фон с твоими цветами
      display="flex"
      flexDirection="column"
      fontFamily="'Calibri', sans-serif"
     
    >
      <Header />
      <Box flex="1" p={1}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
