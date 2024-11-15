import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const About: React.FC = () => {
  return (
    <Box
  
      minH="100vh"
      w="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={5}
    >
      <Heading as="h1" fontSize="2.5rem" mb={6}>
        Информация о нашей команде!
      </Heading>
      <Text fontSize="1.2rem" mb={4}>
        Мы — команда, увлеченная путешествиями, и наша цель — помочь вам планировать незабываемые поездки!
      </Text>
      <Text fontSize="1.2rem">
        Присоединяйтесь к нам в исследовании новых направлений и создании ярких воспоминаний.
      </Text>
    </Box>
  );
};

export default About;
