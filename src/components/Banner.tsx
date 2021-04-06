import { Image, Flex, VStack, Heading, Text, Box } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex position="relative" mb="8">
      <Image
        position="absolute"
        zIndex="-1"
        maxHeight="335px"
        src="/images/background-banner.png"
      />

      <VStack
        pt="20"
        pb="16"
        pl="36"
        w="50%"
        color="gray.50"
        spacing="5"
        align="flex-start"
      >
        <Heading fontWeight="medium" fontSize="2.25rem">
          5 Continentes, <br />
          infinitas possibilidades.
        </Heading>
        <Text>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </VStack>

      <Image
        transform="rotate(3deg)"
        position="absolute"
        right="36"
        top="16"
        maxHeight="270px"
        src="/images/airplane.svg"
      />
    </Flex>
  );
}
