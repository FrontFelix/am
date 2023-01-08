import { Box, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
export default function NftSlider() {
  return (
    <Box py={"2rem"}>
      <Flex>
        <Button mr={"1rem"} display={"block"} alignSelf={"center"} id="prevBtn">
          Prev
        </Button>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            850: {
              width: 640,
              slidesPerView: 2,
            },
            // 1000: {
            //   width: 1000,
            //   slidesPerView: 3,
            // },
            1400: {
              width: 1400,
              slidesPerView: 4,
            },
          }}
          spaceBetween={40}
          autoplay={true}
          pagination={{
            type: "bullets",
          }}
          navigation={{
            nextEl: "#nextBtn",
            prevEl: "#prevBtn",
          }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide style={{ width: "20rem" }}>
            <Box w="100%" minH="20rem" pos="relative">
              <Image
                layout="fill"
                alt="test"
                src={"/images/nft.png"}
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide style={{ width: "20rem" }}>
            <Box w="100%" minH="20rem" pos="relative">
              <Image
                layout="fill"
                alt="test"
                src={"/images/nft.png"}
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide style={{ width: "20rem" }}>
            <Box w="100%" minH="20rem" pos="relative">
              <Image
                layout="fill"
                alt="test"
                src={"/images/nft.png"}
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide style={{ width: "20rem" }}>
            <Box w="100%" minH="20rem" pos="relative">
              <Image
                layout="fill"
                alt="test"
                src={"/images/nft.png"}
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide style={{ width: "20rem" }}>
            <Box w="100%" minH="20rem" pos="relative">
              <Image
                layout="fill"
                alt="test"
                src={"/images/nft.png"}
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </SwiperSlide>
        </Swiper>
        <Button ml={"1rem"} display={"block"} alignSelf={"center"} id="nextBtn">
          Next
        </Button>
      </Flex>
    </Box>
  );
}
