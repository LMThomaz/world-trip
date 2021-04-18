import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CardCountryProps {
  image: string;
  city: string;
  country: string;
}

export function CardCountry({ image, city, country }: CardCountryProps) {
  return (
    <Box background="white" w="64" borderRadius="8">
      <Image
        src={`/images/country/${image}.jpg`}
        h="44"
        w="100%"
        objectFit="cover"
        borderTopRadius="8"
      />
      <Flex
        justify="space-between"
        align="center"
        py="4"
        px="6"
        border="1px solid"
        borderTop="none"
        borderColor="yellow.500"
        borderBottomRadius="8"
      >
        <Box>
          <Text
            fontSize="1.25rem"
            fontWeight="semibold"
            fontFamily="Barlow"
            mb="3"
          >
            {city}
          </Text>
          <Text
            color="gray.250"
            fontSize="1rem"
            fontWeight="medium"
            fontFamily="Barlow"
          >
            {country}
          </Text>
        </Box>
        <Image
          src={`/images/flag/${image}.jpg`}
          boxSize="8"
          borderRadius="full"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
