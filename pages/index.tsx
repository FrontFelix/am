import {
  Center,
  Container,
  Flex,
  Spacer,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { primaryButtonHover } from "../themes/hoverStyles";
import "@splidejs/react-splide/css";
import Roadmap from "../components/Roadmap";
import "swiper/css/bundle";
import Faq from "../components/faq";
import NftSlider from "../components/NftSlider";
import TeamShowcase from "../components/TeamShowcase";
import ArtistSection from "../components/ArtistSection";
import { motion } from "framer-motion";
// import "/fonts/textFont.ttf";
// import "/fonts/titleFont.ttf";

export default function Home() {
  // const profileRoleText = chakra(motion.text, {
  //   shouldForwardProp: isValidMotionProp,
  // });

  return (
    <div className="">
      <Container pt={{ base: "6rem", lg: "8rem" }} maxW="1200px">
        <div className="topDiv">
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box>
              <Text
                className="testFont"
                textStyle="h1"
                textAlign={{ base: "center" }}
              >
                REVOLUZING SCOTTISH
              </Text>
              <Text textStyle="h1" textAlign={{ base: "center" }}>
                WHISKY
              </Text>
              <Button
                px={"2rem"}
                display={{ base: "block" }}
                mb={"1rem"}
                m={{ base: "0 auto", lg: "0 auto" }}
                variant="Primary"
                _hover={primaryButtonHover}
              >
                Join Discord
              </Button>
            </Box>
            {/* <Spacer />
            <Box mt={{ base: "2rem", lg: "0" }}>
              <Image
                width={300}
                height={300}
                style={{ margin: "0 auto", display: "block" }}
                src={"/images/placeHolder.png"}
                alt="placeholder"
              />
            </Box> */}
          </Flex>
        </div>
        <Box
          overflow={"visible"}
          my={{ base: "5rem", lg: "6rem" }}
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
                  Powered by WEB3
                </Text>
                {/* <h1 style={{"lineHeight": "2rem"}}>Powered by Scottish Whisky</h1> */}
                <Text textAlign={{ base: "center", lg: "left" }}>
                  Albannach Mòr is a groundbreaking project focused on engaging
                  the next generation of whiskey enthusiasts. Our unique
                  business model allows holders to invest in top quality artwork
                  through our decentralized autonomous organization (DAO)
                  ecosystem.
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
                    style={{
                      paddingTop: "-30px",
                      borderRadius: ".7rem",
                      height: "19.9rem",
                      width: "19.9rem",
                    }}
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
        <ArtistSection />
        {/* Artist */}

        {/* Team Showcase */}
        <Box py={"3rem"}>
          <Text textStyle="h4">Meet the team</Text>
          <Text textStyle="h2">Founders</Text>
          <TeamShowcase />
        </Box>
        {/* Team Showcase */}

        {/* NFT SHOWCASE */}
        <Box mt={{ base: "", lg: "7rem" }}>
          <Text textStyle="h4">Our art</Text>
          <Text textStyle="h2">AM NFTS</Text>
          <NftSlider />
        </Box>
        {/* NFT SHOWCASE */}
        {/* FAQ */}
        <Text mt={"7rem"} textStyle="h4">
          Frequently asked questions
        </Text>
        <Text textStyle="h2">FAQ</Text>
        <Faq />
        {/* FAQ */}
      </Container>
    </div>
  );
}
