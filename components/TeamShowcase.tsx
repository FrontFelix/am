import { Flex, Box, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { staffTeam } from "../pages/api/staff";
import { motion } from "framer-motion";
import { whiteToGoldColor } from "../themes/hoverStyles";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedIcon from "./icons/LinkedIn";
import FacebooIcon from "./icons/FacebookIcon";
import MemberCard from "./MemberCard";
import Image from "next/image";
export default function TeamShowcase() {
  return (
    <Box minH={"50rem"} pos={"relative"}>
      <Box display={{ base: "none", lg: "block" }}>
        <Image
          objectFit="cover"
          layout="fill"
          style={{ position: "absolute", opacity: ".2", zIndex: "-8" }}
          alt={"Team"}
          src={"/images/team.jpeg"}
        />
      </Box>
      <Box
        zIndex={"100"}
        pt={{ base: "2rem", lg: "10rem" }}
        margin={"0 auto"}
        maxW="1200px"
        px={{ base: "1.5rem", xl: "0" }}
      >
        <Text textAlign={{ base: "center", lg: "left" }} textStyle="h4">
          Meet the team
        </Text>
        <Text textAlign={{ base: "center", lg: "left" }} textStyle="h2">
          Founders
        </Text>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          mt={"2rem"}
          justifyContent={{ base: "center", lg: "space-between" }}
        >
          {staffTeam.map((member, i) => (
            <MemberCard key={i} member={member} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
