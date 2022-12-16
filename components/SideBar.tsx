import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { secondaryButtonHover } from "../themes/hoverStyles";
interface sidebarProps {
  state: boolean;
}
export default function SideBar({ state }: sidebarProps) {
  const animationVariants = {
    open: {
      display: "block",
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: ".2",
      },
    },
    close: {
      opacity: 0,
      x: -100,
      display: "none",
      transition: {
        ease: "easeInOut",
        duration: ".1",
        display: {
          delay: ".2",
          duration: ".2",
        },
      },
    },
  };
  return (
    <Box display={{ base: "block", xl: "none" }}>
      <motion.div
        animate={state ? "open" : "close"}
        variants={animationVariants}
        style={{
          minHeight: "100vh",
          width: "100%",
          position: "fixed",
          top: "0",
          zIndex: "6",
          backgroundColor: "#1b1a17",
          padding: "4rem",
        }}
      >
        <Flex flexDir={"column"}>
          <Link href={"/"}>Home</Link>
          <Spacer py={"1rem"} />
          <Link
            style={{ pointerEvents: "none", textDecoration: "line-through" }}
            href={"/xx"}
          >
            Marketplace...
          </Link>
          <Spacer py={"1rem"} />
          <Link
            style={{ pointerEvents: "none", textDecoration: "line-through" }}
            href={"/"}
          >
            Staking...
          </Link>
        </Flex>
      </motion.div>
    </Box>
  );
}
