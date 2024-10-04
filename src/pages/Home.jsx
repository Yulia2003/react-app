// src/pages/Home.jsx
import React from 'react';
import { Box, Heading, Text, Button, UnorderedList, ListItem } from '@chakra-ui/react'; // Импорт необходимых компонентов Chakra UI

function Home() {
  return (
    <Box textAlign="center" p={5}>
      <Heading as="h1" size="2xl" mb={4}>
        Добро пожаловать в Планировщик Путешествий!
      </Heading>
      <Text fontSize="lg" mb={6}>
        Откройте для себя новые направления и легко планируйте свои поездки!
      </Text>
      
      {/* Кнопка для начала планирования */}
      <Button
        colorScheme="blue" // Использование предопределённой цветовой схемы Chakra
        size="lg" // Размер кнопки
        onClick={() => alert('Планирование начато!')} // Обработчик клика
        mb={5} // Отступ снизу
      >
        Начать планирование
      </Button>
      
      <Box mt={5}>
        <Heading as="h2" size="lg" mb={3}>
          Популярные направления:
        </Heading>
        <UnorderedList spacing={2}>
          <ListItem>Париж</ListItem>
          <ListItem>Токио</ListItem>
          <ListItem>Нью-Йорк</ListItem>
          <ListItem>Рим</ListItem>
          <ListItem>Бали</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default Home;
