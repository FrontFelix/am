import { Flex, Box, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { staffTeam } from "../pages/api/staff";
import { motion } from "framer-motion";
import { whiteToGoldColor } from "../themes/hoverStyles";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedIcon from "./icons/LinkedIn";
import FacebooIcon from "./icons/FacebookIcon";
export default function TeamShowcase() {
  return (
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
  );
}
