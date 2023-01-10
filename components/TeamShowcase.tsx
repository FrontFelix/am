import { Flex, Box, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { staffTeam } from "../pages/api/staff";
import { motion } from "framer-motion";
import { whiteToGoldColor } from "../themes/hoverStyles";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedIcon from "./icons/LinkedIn";
import FacebooIcon from "./icons/FacebookIcon";
import MemberCard from "./MemberCard";
export default function TeamShowcase() {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      mt={"2rem"}
      justifyContent={{ base: "center", lg: "space-between" }}
    >
      {staffTeam.map((member, i) => (
        <MemberCard key={i} member={member} />
      ))}
    </Flex>
  );
}
