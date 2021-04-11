import { Box, Divider, Flex, Img, LinkBox, Text } from "@chakra-ui/react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Banner, Header, TravelTypes } from "../components";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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

      <Flex maxWidth={1240} h="96" mb="10" mx="auto">
        <Swiper
          spaceBetween={0}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
        >
          <Box className="swiper-button-next"></Box>
          <Box className="swiper-button-prev"></Box>
          <SwiperSlide>
            <Link href="/europe">
              <LinkBox position="absolute" cursor="pointer" h="100%">
                <Img
                  src="/images/continents/europe.png"
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
            <Flex
              position="relative"
              zIndex="5"
              height="100%"
              width="100%"
              align="center"
              justify="center"
              flexDirection="column"
            >
              <Text as="h3" color="gray.100" fontWeight="bold" fontSize="3rem">
                Europa
              </Text>
              <Text
                as="p"
                color="gray.100"
                fontWeight="bold"
                fontSize="1.5rem"
                mt="4"
              >
                O continente mais antigo.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/europe">
              <LinkBox position="absolute" cursor="pointer" h="100%">
                <Img
                  src="/images/continents/south-america.jpg"
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
            <Flex
              position="relative"
              zIndex="5"
              height="100%"
              width="100%"
              align="center"
              justify="center"
              flexDirection="column"
            >
              <Text as="h3" color="gray.100" fontWeight="bold" fontSize="3rem">
                America do sul
              </Text>
              <Text
                as="p"
                color="gray.100"
                fontWeight="bold"
                fontSize="1.5rem"
                mt="4"
              >
                A região com paisagens naturais de tira o folego.
              </Text>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
}
