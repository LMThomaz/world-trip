import { Flex, Image, Link as LinkChakra } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface HeaderProps {
  backButton?: boolean;
}

export function Header({ backButton = false }: HeaderProps) {
  return (
    <Flex position="relative" align="center" justify="center" py="7">
      {backButton && (
        <Link href="/">
          <LinkChakra title="ir para homepage" position="absolute" left="36">
            <ChevronLeftIcon width="8" height="8" />
          </LinkChakra>
        </Link>
      )}
      <Image src="/images/logo.svg" alt="Logo" />
    </Flex>
  );
}
