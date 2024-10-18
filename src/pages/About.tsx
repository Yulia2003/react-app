// src/pages/About.tsx
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import './About.css'; // Импорт стилей для компонента

const About: React.FC = () => {
  return (
    <Box className="about-container">
      <Heading as="h1" size="2xl" mb={4}>
        Информация о нашей команде!
      </Heading>
      <Text fontSize="lg" mb={6}>
        Мы — команда, увлеченная путешествиями, и наша цель — помочь вам планировать незабываемые поездки!
      </Text>
      <Text fontSize="lg">
        Присоединяйтесь к нам в исследовании новых направлений и создании ярких воспоминаний.
      </Text>
    </Box>
  );
};

export default About;
