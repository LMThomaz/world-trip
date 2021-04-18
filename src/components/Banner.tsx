import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex mb="8" background="url(/images/background-banner.png)">
      <VStack
        pt={{ base: "7", xl: "20" }}
        pb={{ base: "7", xl: "36" }}
        pl={{ base: "4", xl: "36" }}
        pr={{ base: "4", xl: "0" }}
        w={{ base: "100%", xl: "50%" }}
        color="gray.50"
        spacing="5"
        align="flex-start"
      >
        <Heading
          fontWeight="medium"
          fontSize={{ base: "1.25rem", xl: "2.25rem" }}
        >
          5 Continentes, <br />
          infinitas possibilidades.
        </Heading>
        <Text color="gray.100" fontSize={{ base: "0.875rem", xl: "1rem" }}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </VStack>

      <Image
        display={{ base: "none", xl: "block" }}
        transform="rotate(3deg)"
        position="absolute"
        right="36"
        top="16"
        src="/images/airplane.svg"
      />
    </Flex>
  );
}
