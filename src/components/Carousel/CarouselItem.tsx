import { Box, Flex, Img, LinkBox, Text } from "@chakra-ui/react";
import Link from "next/link";

interface CarouselItemProps {
  href: string;
  image: string;
  title: string;
  text: string;
}

export function CarouselItem({ href, image, title, text }: CarouselItemProps) {
  return (
    <>
      <Link href={href}>
        <LinkBox position="absolute" cursor="pointer" h="100%">
          <Img
            src={`/images/continents/${image}`}
            h="100%"
            w="100%"
            objectFit="cover"
            alt="banner"
            maxHeight="96"
          />
          <Box
            background="gray.900"
            opacity="0.35"
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
          />
        </LinkBox>
      </Link>
      <Link href={href}>
        <Flex
          position="relative"
          zIndex="5"
          w="100%"
          h="100%"
          align="center"
          justify="center"
          flexDirection="column"
        >
          <Text as="h3" color="gray.100" fontWeight="bold" fontSize="3rem">
            {title}
          </Text>
          <Text
            as="p"
            color="gray.100"
            fontWeight="bold"
            fontSize="1.5rem"
            mt="4"
          >
            {text}
          </Text>
        </Flex>
      </Link>
    </>
  );
}
