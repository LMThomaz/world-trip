import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselItem } from "./CarouselItem";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Carousel() {
  return (
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
          <CarouselItem
            href="/europe"
            image="europe.jpg"
            title="Europa"
            text="O continente mais antigo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            href="/europe"
            image="south-america.jpg"
            title="America do sul"
            text="A região com paisagens naturais de tira o folego."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            href="/europe"
            image="north-america.jpg"
            title="America do norte"
            text="A região com paisagens naturais de tira o folego."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            href="/europe"
            image="asia.jpg"
            title="Ásia"
            text="Região com cultura única."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            href="/europe"
            image="africa.jpg"
            title="África"
            text="Região que ensina o ubuntu."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            href="/europe"
            image="oceania.jpg"
            title="Oceania"
            text="Região com animais únicos."
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
