import React from 'react';
import { Box, Heading, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Testimonial } from '../../components/Testimonial/Testimonial.tsx';

const Home: React.FC = () => {
  const popularDestinations = [
    {
      title: 'Париж',
      price: 50000,
      imageUrl: 'src/assets/Paris.jpg',
    },
    {
      title: 'Токио',
      price: 60000,
      imageUrl: '/src/assets/tokyo.jpg',
    },
    {
      title: 'Нью-Йорк',
      price: 70000,
      imageUrl: '/src/assets/new_york.jpg',
    },
    {
      title: 'Рим',
      price: 55000,
      imageUrl: '/src/assets/rim.jpg',
    },
    {
      title: 'Бали',
      price: 80000,
      imageUrl: '/src/assets/bali.jpg',
    },
    {
      title: 'Пхукет',
      price: 80000,
      imageUrl: '/src/assets/pxycet.jpg',
    },
  ];

  const testimonials = [
    {
      name: 'Анна Смирнова',
      comment: 'Планирование моей поездки в Париж стало настоящим удовольствием! Удобный интерфейс и много полезной информации.',
    },
    {
      name: 'Дмитрий Кузнецов',
      comment: 'С помощью этого сайта я быстро нашел лучшие маршруты и отели. Рекомендую всем!',
    },
    {
      name: 'Елена Павлова',
      comment: 'Я была поражена, насколько легко было спланировать свою поездку в Бали. Спасибо за отличный сервис!',
    },
  ];

  return (
    <Box
    >
      <Heading as="h4" size="xl" mb={4} fontWeight="normal">
        Постройте маршрут путешествия легко и просто
      </Heading>
      <Text fontSize="lg" mb={10}>
        Откройте для себя новые направления и легко планируйте свои поездки!
      </Text>

      <Button
        bg="#CCFFE5" // Цвет кнопки
        color="black" // Цвет текста
        _hover={{ bg: '#34D0B6' }} // Цвет при наведении
        size="lg"
        onClick={() => alert('Планирование начато!')}
        mb={8}
        fontWeight="normal"
      >
        Начать путешествие
      </Button>

      <Box mt={5} width="100%">
        <Heading as="h2" size="lg" mb={4} fontWeight="normal">
          Популярные направления
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
          {popularDestinations.map((destination, index) => (
            <ProductCard
              key={index}
              title={destination.title}
              price={destination.price}
              imageUrl={destination.imageUrl}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box mt={10} width="100%">
        <Heading as="h2" size="lg" mb={4} fontWeight="medium">
          Отзывы
        </Heading>
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            comment={testimonial.comment}
            
          />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
