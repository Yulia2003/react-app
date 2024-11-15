import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex } from '@chakra-ui/react';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Box bg="" p={4}>
      <Flex justifyContent="space-between">
        <Button
          variant="link" // Кнопка с прозрачным фоном и без рамок
          color="black" // Цвет текста
          fontSize="18px" // Размер шрифта
          onClick={() => navigate('/')}
          _hover={{ textDecoration: 'underline' }} // Подчеркивание при наведении
        >
          Home
        </Button>
        <Button
          variant="link"
          color="black"
          fontSize="16px"
          onClick={() => navigate('/about')}
          _hover={{ textDecoration: 'underline' }}
        >
          About
        </Button>
      </Flex>
    </Box>
  );
};
