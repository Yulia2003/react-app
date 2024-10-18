// src/pages/Home.tsx
import React from 'react';
import { Box, Heading, Text, Button, UnorderedList, ListItem } from '@chakra-ui/react';
import './Home.css'; // Импорт стилей для компонента
import { Link } from 'react-router-dom'; // Импорт Link

const Home: React.FC = () => {
  return (
    <Box className="home-container"> {/* Применяем класс для контейнера */}
      <Heading as="h1" size="2xl" className="home-heading">
        Добро пожаловать в Планировщик Путешествий!
      </Heading>
      <Text fontSize="lg" className="home-text">
        Откройте для себя новые направления и легко планируйте свои поездки!
      </Text>

      {/* Кнопка для перехода на страницу "О нас" */}
      <Link to="/about"> {/* Используем Link для навигации на About */}
        <Button
          colorScheme="orange" // Устанавливаем цвет кнопки
          size="lg"
          mb={5}
        >
          Перейти на страницу "О нас"
        </Button>
      </Link>

      {/* Кнопка для начала планирования */}
      <Button
        colorScheme="green"
        className="home-button"
        size="lg"
        onClick={() => alert('Планирование начато!')}
        mb={5}
      >
        Начать планирование
      </Button>

      <Box mt={5}>
        <Heading as="h2" size="lg" className="home-heading">
          Популярные направления:
        </Heading>
        <UnorderedList spacing={2} className="home-list">
          <ListItem className="home-list-item">Париж</ListItem>
          <ListItem className="home-list-item">Токио</ListItem>
          <ListItem className="home-list-item">Нью-Йорк</ListItem>
          <ListItem className="home-list-item">Рим</ListItem>
          <ListItem className="home-list-item">Бали</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Home;
