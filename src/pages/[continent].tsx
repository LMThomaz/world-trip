import { Box, Flex, Grid, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Header, CardCountry } from "../components";

export default function Continent() {
  const router = useRouter();

  const { continent } = router.query;

  return (
    <>
      <Header backButton />
      <Flex as="main" flexDirection="column">
        <Flex h="500px" w="100%" position="relative" align="flex-end">
          <Image
            src={`/images/continents/${continent}.jpg`}
            objectFit="cover"
            filter="brightness(.5)"
            position="absolute"
            h="100%"
            w="100%"
            zIndex="-1"
          />
          <Text
            color="gray.100"
            py="14"
            px="10"
            maxWidth="1240"
            w="100%"
            fontSize="3rem"
            fontWeight="semibold"
          >
            Europa
          </Text>
        </Flex>

        <Grid
          templateColumns="1fr 1fr"
          py="20"
          px="10"
          maxWidth="1240"
          gap="16"
          fontSize="1.5rem"
        >
          <Text>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex justify="space-between" fontWeight="semibold" align="center">
            <Flex flexDirection="column" alignItems="center">
              <Text color="yellow.500" fontSize="3rem">
                50
              </Text>
              <Text mt="-4">países</Text>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Text color="yellow.500" fontSize="3rem">
                60
              </Text>
              <Text mt="-4">línguas</Text>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Text color="yellow.500" fontSize="3rem">
                27
              </Text>
              <Text mt="-4">cidades +100</Text>
            </Flex>
          </Flex>
        </Grid>

        <Box px="10" maxWidth="1240">
          <Text fontSize="2.25rem" fontWeight="medium">
            Cidades +100
          </Text>
          <SimpleGrid
            minChildWidth="16rem"
            gap="10"
            py="10"
            flex="1"
            align="flex-start"
          >
            <CardCountry image="london" country="Reino Unido" city="Londres" />
            <CardCountry image="france" country="França" city="Paris" />
            <CardCountry image="italy" country="Itália" city="Roma" />
            <CardCountry
              image="czech-republic"
              country="República Tcheca"
              city="Praga"
            />
            <CardCountry
              image="netherlands"
              country="Holanda"
              city="Amsterdã"
            />
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
}
