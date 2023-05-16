import { Flex, IconButton, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { StaffTeam } from "../pages/api/staff";
import { whiteToGoldColor } from "../themes/hoverStyles";
import FacebooIcon from "./icons/FacebookIcon";
import LinkedIcon from "./icons/LinkedIn";
import TwitterIcon from "./icons/TwitterIcon";

interface cardProps {
  member: StaffTeam;
}
export default function MemberCard({ member }: cardProps) {
  const [imageSrc, setImageSrc] = useState(member.imageSrc);

  function hoverStartEffect() {
    setTimeout(() => {
      setImageSrc(member.hoverImage);
    }, 50);
  }

  function hoverEndEffect() {
    setTimeout(() => {
      setImageSrc(member.imageSrc);
    }, 50);
  }
  return (
    <Box my={{ base: "2rem", lg: "0" }} w={{ base: "100%", lg: "33%" }}>
      <Link key={member.id} href={`staff/${member.id}`}>
        <Box m={{ base: "0 auto", lg: "0 auto" }} maxW={"70%"} pos={"relative"}>
          <motion.img
            style={{
              margin: "0 auto",
              objectFit: "cover",
              width: "16rem",
              height: "20rem",
              clipPath:
                "polygon(0 0, 91% 0, 100% 11%, 100% 100%, 25% 100%, 0 100%)",
            }}
            transition={{ duration: "14.2s" }}
            alt="person"
            src={imageSrc}
            onHoverStart={hoverStartEffect}
            onHoverEnd={hoverEndEffect}
            whileHover={{ scale: 1.05 }}
            layoutId={member.id}
          />
          <Flex
            flexDir={"column"}
            top={"1.6rem"}
            right={"-2rem"}
            pos={"absolute"}
          >
            <Link href={member.Twitter}>
              <IconButton
                zIndex={10}
                _hover={whiteToGoldColor}
                transition={".3s"}
                variant="iconWhiteTransparent"
                aria-label="test"
                icon={<TwitterIcon />}
              />
            </Link>
            <Link href={member.linkedIn}>
              <IconButton
                zIndex={10}
                transition={".3s"}
                py={"2rem"}
                variant="iconWhiteTransparent"
                aria-label="test"
                icon={<LinkedIcon />}
              />
            </Link>
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
          layoutId={`role ${member.id}`}
        >
          {member.role}
        </Text>
      </Box>
    </Box>
  );
}
