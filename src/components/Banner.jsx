// src/components/Banner.jsx
import { Flex, Text } from '@chakra-ui/react';

function Banner() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py={2}
      bg="gray.800"
      color="white"
      borderBottom="1px solid"
      borderColor="gray.700"
    >
      <Text fontSize="lg" textAlign="center" color="gray.300" fontWeight="bold">
        D
        <Text as="span" color="purple.400" fontWeight="bold">IA</Text>
        NA
      </Text>

    </Flex>
  );
}

export default Banner;
