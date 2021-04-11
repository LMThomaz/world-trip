import { Box, Divider, Text } from "@chakra-ui/react";
import { Banner, Header, TravelTypes } from "../components";
import { Carousel } from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Box py="20" px="36">
        <TravelTypes />
      </Box>
      <Divider h="2px" w="90px" bg="gray.500" mx="auto" />
      <Box py="14">
        <Text align="center" fontSize="2.25rem" fontWeight="medium">
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
      </Box>
      <Carousel />
    </>
  );
}
