import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex align="center" justify="center" py="7">
      <Image src="/images/logo.svg" alt="Logo" />
    </Flex>
  );
}
