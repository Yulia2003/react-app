import { Box, Image, Text } from '@chakra-ui/react';

interface TestimonialProps {
  name: string;
  comment: string;
  avatarUrl?: string; // Сделаем это свойство необязательным
}

export const Testimonial = ({ name, comment, avatarUrl }: TestimonialProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      p={4}
      border="1px solid #ddd"
      borderRadius="8px"
      bg="#f9f9f9"
      mb={4} // Отступ между отзывами
    >
      {avatarUrl && (
        <Image
          src={avatarUrl}
          alt={name}
          borderRadius="full"
          boxSize="60px" // Размер аватара
          mr={4} // Отступ справа
        />
      )}
      <Box display="flex" flexDirection="column">
        <Text as="h4" fontSize="1.1em" mb={1} fontWeight="bold">
          {name}
        </Text>
        <Text color="#555">{comment}</Text>
      </Box>
    </Box>
  );
};
