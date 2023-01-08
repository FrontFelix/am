import { Button, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { secondaryButtonHover } from "../themes/hoverStyles";

export default function ArtistSection() {
  return (
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
        <Text textAlign={{ base: "center", lg: "left" }}>
          SUUM.studio is a multimedia design studio based in Glasgow, we
          specialise in creating 3D moving image design, incorporating
          character, environment, lighting and VFX for film, broadcast,
          marketing, branding and communication projects.
        </Text>
        <Text textAlign={{ base: "center", lg: "left" }}>
          Our clients range from media, cultural and tech to arts,
          entertainment, education and heritage industries. Our team of talented
          artists and designers work alongside skilled animators, editors,
          directors, sound designers and composers to bring ideas to life.
        </Text>
        <Text pb={"1.4rem"} textAlign={{ base: "center", lg: "left" }}>
          Our work has been featured on BBC, Sky Arts, Channel 4, Channel 5 and
          National Geographic Channel, in addition to being experienced across
          web, social and mobile platforms. We love creating authentic and
          immersive worlds, where audiences can experience something meaningful
          that moves them, connects with them and brightens up their world.
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
  );
}
