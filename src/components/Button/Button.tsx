import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

interface ButtonProps {
  label: string; // текст кнопки
  onClick: () => void; // функция, вызываемая при нажатии на кнопку.
  color?: 'blue' | 'red';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color = 'blue', size = 'medium' }) => {
  return (
    <ChakraButton
      onClick={onClick}
      colorScheme={color === 'blue' ? 'blue' : 'red'}
      size={size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md'}
      variant="solid" // Используем стандартный вариант кнопки
      transition="background-color 0.3s ease" // Плавный переход фона
      _hover={{ opacity: 0.5 }} // Прозрачность при наведении
    >
      {label}
    </ChakraButton>
  );
};

export default Button;
