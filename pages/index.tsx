import {
  Center,
  Container,
  Flex,
  Spacer,
  Box,
  Button,
  Text,
  IconButton,
  chakra,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  primaryButtonHover,
  secondaryButtonHover,
  whiteToGoldColor,
} from "../themes/hoverStyles";
import "@splidejs/react-splide/css";
import Roadmap from "../components/Roadmap";
import TwitterIcon from "../components/icons/TwitterIcon";
import LinkedIcon from "../components/icons/LinkedIn";
import FacebooIcon from "../components/icons/FacebookIcon";
import { staffTeam } from "./api/staff";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper";
import { padding } from "@mui/system";
import { useState } from "react";
import Faq from "../components/faq";

export default function Home() {
  const profileRoleText = chakra(motion.text, {
    shouldForwardProp: isValidMotionProp,
  });

  return (
    <div className="">
      <Container pt={{ base: "0rem", lg: "2rem" }} maxW="1200px">
        <div className="topDiv">
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            alignItems={"center"}
          >
            <Box>
              <Text textStyle="h1" textAlign={{ base: "center", lg: "left" }}>
                The NFTs of
              </Text>
              <Text textStyle="h1" textAlign={{ base: "center", lg: "left" }}>
                Whiskey
              </Text>
              <Text textStyle="p" textAlign={{ base: "center", lg: "left" }}>
                Art that revolutionizes
              </Text>
              <Text
                pb={"2rem"}
                textAlign={{ base: "center", lg: "left" }}
                variant="Paragraph"
              >
                traditional scottish whiskey.
              </Text>
              <Button
                px={"2rem"}
                display={{ base: "block" }}
                mb={"1rem"}
                m={{ base: "0 auto", lg: "0" }}
                variant="Primary"
                _hover={primaryButtonHover}
              >
                Join Discord
              </Button>
            </Box>
            <Spacer />
            <Box mt={{ base: "2rem", lg: "0" }}>
              <Image
                width={300}
                height={300}
                style={{ margin: "0 auto", display: "block" }}
                src={"/images/placeHolder.png"}
                alt="placeholder"
              />
            </Box>
          </Flex>
        </div>
        <Box
          overflow={"visible"}
          my={{ base: "5rem", lg: "2rem" }}
          className="heroDiv"
        >
          <Box
            overflow={"visible"}
            clipPath={{
              base: "",
              lg: "polygon(100% 21%, 100% 100%, 0 100%, 0 0)",
            }}
            h={{ base: "50rem", lg: "35rem" }}
          >
            <Flex
              flexDir={{ base: "column", lg: "row" }}
              px={{ base: "1rem", lg: "5rem" }}
              py={{ base: "5rem", lg: "5rem" }}
              overflow={"visible"}
              minH={"100%"}
              alignItems={"center"}
            >
              <Box maxW={{ base: "100%", lg: "60%" }}>
                <Text textAlign={{ base: "center", lg: "left" }} textStyle="h1">
                  Powered by Scottish Whisky
                </Text>
                {/* <h1 style={{"lineHeight": "2rem"}}>Powered by Scottish Whisky</h1> */}
                <Text textAlign={{ base: "center", lg: "left" }}>
                  Albannach Mòr is an exciting new project that will be
                  exploring the next generation of Whisky enthusiasts.
                </Text>
              </Box>
              <Spacer display={{ base: "none", lg: "block" }} />
              <Box mt={{ base: "2.9rem" }}>
                <Box
                  style={{
                    height: "20rem",
                    width: "20rem",
                    borderRadius: "1rem",
                    border: "4px solid #D2AC48",
                    position: "relative",
                  }}
                >
                  <motion.img
                    style={{ borderRadius: ".7rem" }}
                    animate={{ scale: [1, 0.9, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    alt="logo"
                    src={"/images/logo.png"}
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* RoadMap */}
        <Box my={"5rem"}>
          <Text textAlign={{ base: "center", lg: "left" }} textStyle="h4">
            First stage of Albannach Mòr
          </Text>
          <Text textAlign={{ base: "center", lg: "left" }} textStyle="h2">
            Roadmap
          </Text>
          <Roadmap />
        </Box>
        {/* RoadMap */}

        {/* Artist */}
        <Box py={"3rem"} my={"10rem"} position={"relative"}>
          <Box
            display={{ base: "none", xl: "block" }}
            top={{ base: "-100rem", lg: "-130rem" }}
            zIndex={"-2"}
            pos={"absolute"}
            width={{ base: "100%", lg: "100%", xl: "200%" }}
            height={"30rem"}
            left={"-30rem"}
          >
            <Image
              width={1000}
              height={1000}
              style={{ position: "absolute", maxWidth: "none", width: "100%" }}
              alt="wave"
              src={"/images/bg-wave.png"}
            ></Image>
          </Box>
          <Box
            left={{ base: "-1rem", lg: "-40rem" }}
            borderY={{ base: "8px solid #D2AC47", lg: "none" }}
            zIndex={"-1"}
            borderRight={{ lg: "8px solid #D2AC47" }}
            borderRadius={{ base: "0rem", lg: "2rem" }}
            height={"100%"}
            width={"110%"}
            bg={"#262522"}
            position={"absolute"}
          ></Box>
          <Box
            display={{ base: "none", lg: "block" }}
            filter={"blur(2px)"}
            my={"-6rem"}
            right={"-30rem"}
            zIndex={"-2"}
            borderLeft={"8px solid #41403c"}
            borderRadius={"2rem"}
            height={"100%"}
            width={"110%"}
            bg={`url("https://abcmallorcastorage.blob.core.windows.net/images/2014/08/artist-stduio-mallorca.jpg")`}
            position={{ base: "unset", lg: "absolute" }}
          ></Box>
          <Box
            pt={{ base: "8rem", lg: "16rem" }}
            pb={{ base: "4rem", lg: "10rem" }}
            w={{ base: "100%", lg: "50%" }}
            zIndex={"4"}
          >
            <Text textAlign={{ base: "center", lg: "left" }} textStyle="h4">
              Artist
            </Text>
            <Text
              display={{ base: "none", lg: "block" }}
              textAlign={{ base: "center", lg: "left" }}
              pb={"1.4rem"}
              textStyle="h2"
            >
              SUUM.studio
            </Text>
            <Text
              display={{ base: "block", lg: "none" }}
              textAlign={{ base: "center", lg: "left" }}
              pb={"1.4rem"}
              textStyle="h2"
            >
              SUUM.
            </Text>
            <Text
              display={{ base: "block", lg: "none" }}
              textAlign={{ base: "center", lg: "left" }}
              pb={"1.4rem"}
              textStyle="h2"
            >
              studio
            </Text>
            <Text textAlign={{ base: "center", lg: "left" }} pb={"1.4rem"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown
            </Text>
            <Button
              display="block"
              m={{ base: "0 auto", lg: "0" }}
              _hover={secondaryButtonHover}
              variant="Secondary"
            >
              View More
            </Button>
          </Box>
        </Box>
        {/* Artist */}

        {/* Team Showcase */}
        <Box py={"3rem"}>
          <Text textStyle="h4">Meet the team</Text>
          <Text textStyle="h2">Founders</Text>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            mt={"2rem"}
            justifyContent={{ base: "center", lg: "space-between" }}
          >
            {staffTeam.map((member, i) => (
              <Box key={i} w={{ base: "100%", lg: "33%" }}>
                <Link key={member.name} href={`staff/${member.name}`}>
                  <Box
                    m={{ base: "0 auto", lg: "0 auto" }}
                    maxW={"70%"}
                    pos={"relative"}
                  >
                    <motion.img
                      style={{
                        objectFit: "cover",
                        width: "16rem",
                        height: "20rem",
                        clipPath:
                          "polygon(0 0, 91% 0, 100% 11%, 100% 100%, 25% 100%, 0 100%)",
                      }}
                      alt="person"
                      src={member.imageSrc}
                      whileHover={{ scale: 1.05 }}
                      layoutId={i.toString()}
                    />
                    <Flex
                      flexDir={"column"}
                      top={"1.6rem"}
                      right={"-2rem"}
                      pos={"absolute"}
                    >
                      <IconButton
                        _hover={whiteToGoldColor}
                        transition={".3s"}
                        variant="iconWhiteTransparent"
                        aria-label="test"
                        icon={<TwitterIcon />}
                      />
                      <IconButton
                        transition={".3s"}
                        py={"2rem"}
                        variant="iconWhiteTransparent"
                        aria-label="test"
                        icon={<LinkedIcon />}
                      />
                      <IconButton
                        transition={".3s"}
                        variant="iconWhiteTransparent"
                        aria-label="test"
                        icon={<FacebooIcon />}
                      />
                      <Box
                        alignSelf={"center"}
                        mt={"2rem"}
                        width={"2px"}
                        height={"5rem"}
                        bg={"#D2AC47"}
                      ></Box>
                    </Flex>
                  </Box>
                </Link>
                <Box maxW={"70%"} margin={"0 auto"}>
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    pt={"1rem"}
                    textStyle="profile"
                  >
                    {member.name}
                  </Text>
                  <Text
                    as={motion.h1}
                    textAlign={{ base: "center", lg: "left" }}
                    textStyle="profileSmall"
                    layoutId={`role ${i.toString()}`}
                  >
                    {member.role}
                  </Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
        {/* Team Showcase */}

        {/* NFT SHOWCASE */}
        <Box>
          <Text textStyle="h4">Our art</Text>
          <Text textStyle="h2">AM NFTS</Text>
          <Box py={"2rem"}>
            <Flex>
              <Button
                mr={"1rem"}
                display={"block"}
                alignSelf={"center"}
                id="prevBtn"
              >
                Prev
              </Button>
              <Swiper
                slidesPerView={4}
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
                <SwiperSlide>
                  <Box w="100%" minH="20rem" pos="relative">
                    <Image
                      layout="fill"
                      alt="test"
                      src={"/images/nft.png"}
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box w="100%" minH="20rem" pos="relative">
                    <Image
                      layout="fill"
                      alt="test"
                      src={"/images/nft.png"}
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box w="100%" minH="20rem" pos="relative">
                    <Image
                      layout="fill"
                      alt="test"
                      src={"/images/nft.png"}
                      style={{ objectFit: "cover" }}
                    ></Image>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box w="100%" minH="20rem" pos="relative">
                    <Image
                      layout="fill"
                      alt="test"
                      src={"/images/nft.png"}
                      style={{ objectFit: "cover" }}
                    ></Image>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box w="100%" minH="20rem" pos="relative">
                    <Image
                      layout="fill"
                      alt="test"
                      src={"/images/nft.png"}
                      style={{ objectFit: "cover" }}
                    ></Image>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box w="100%" minH="20rem" pos="relative">
                    <Image
                      layout="fill"
                      alt="test"
                      src={"/images/nft.png"}
                      style={{ objectFit: "cover" }}
                    ></Image>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box w="100%" minH="20rem" pos="relative">
                    <Image
                      layout="fill"
                      alt="test"
                      src={"/images/nft.png"}
                      style={{ objectFit: "cover" }}
                    ></Image>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box w="100%" minH="20rem" pos="relative">
                    <Image
                      layout="fill"
                      alt="test"
                      src={"/images/nft.png"}
                      style={{ objectFit: "cover" }}
                    ></Image>
                  </Box>
                </SwiperSlide>
              </Swiper>
              <Button
                ml={"1rem"}
                display={"block"}
                alignSelf={"center"}
                id="nextBtn"
              >
                Next
              </Button>
            </Flex>
          </Box>
        </Box>
        {/* NFT SHOWCASE */}
        {/* FAQ */}
        <Text mt={"2rem"} textStyle="h4">
          Frequently asked questions
        </Text>
        <Text textStyle="h2">FAQ</Text>
        <Faq />
        {/* FAQ */}
      </Container>
    </div>
  );
}
