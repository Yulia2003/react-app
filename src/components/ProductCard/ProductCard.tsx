import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

export const ProductCard = ({ title, price, imageUrl }: ProductCardProps) => {
  return (
    <Box 
      borderWidth="2px" 
      borderRadius="lg" 
      padding="10px" 
      textAlign="center" 
      width="250px" 
      _hover={{ boxShadow: 'md' }} // Эффект тени при наведении
    >
      <Image 
        src={imageUrl} 
        alt={title} 
        borderRadius="md" 
        mb="1px"
        width="600px"
        height="250px"
      />
      <Text fontSize="1.2em" mb="1px">{title}</Text>
      <Text color="blue.600" fontSize="1em">{price} ₽</Text>
    </Box>
  );
};
