import { Box, Divider, Text } from "@chakra-ui/react";
import { Banner, Header, TravelTypes } from "../components";
import { Carousel } from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Box py={{ base: "9", xl: "20" }} px={{ base: "12", xl: "36" }}>
        <TravelTypes />
      </Box>
      <Divider h="2px" w="90px" bg="gray.500" mx="auto" />
      <Box py={{ base: "5", xl: "14" }}>
        <Text
          align="center"
          fontSize={{ base: "1.25rem", xl: "2.25rem" }}
          fontWeight="medium"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
      </Box>
      <Carousel />
    </>
  );
}
