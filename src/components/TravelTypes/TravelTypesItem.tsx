import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypesItem {
  image: string;
  text: string;
}

export function TravelTypesItem({ image, text }: TravelTypesItem) {
  return (
    <Flex direction="column" align="center" justify="center">
      <Image maxHeight="85px" maxWidth="85px" src={image} alt={text} />
      <Text mt="6" fontWeight="semibold" fontSize="1.5rem">
        {text}
      </Text>
    </Flex>
  );
}
