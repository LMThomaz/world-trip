import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypesItem {
  image: string;
  text: string;
}

export function TravelTypesItem({ image, text }: TravelTypesItem) {
  return (
    <Flex
      direction={{ base: "row", xl: "column" }}
      p={{ base: "6", xl: "0" }}
      align="center"
      justify="center"
    >
      <Image
        maxHeight={{ base: "8px", xl: "85px" }}
        maxWidth={{ base: "8px", xl: "85px" }}
        borderRadius={{ base: "full", xl: "none" }}
        src={image}
        alt={text}
        background={{ base: "yellow.500", xl: "none" }}
      />
      <Text
        mt={{ base: "0", xl: "6" }}
        ml={{ base: "4", xl: "0" }}
        fontWeight="semibold"
        fontSize="1.5rem"
      >
        {text}
      </Text>
    </Flex>
  );
}
