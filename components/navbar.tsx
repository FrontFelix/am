import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Spacer,
  Switch,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { secondaryButtonHover } from "../themes/hoverStyles";
import { useUserContext } from "../utils/context/userContext";
import HamburgerIcon from "./icons/hamburgerIcon";
import Link from "next/link";
import SideBar from "./SideBar";

export default function Navbar() {
  const { signIn, signedInUser } = useUserContext();
  const [sidebarState, setSideBarState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      console.log(window.scrollY);
      if (window.pageYOffset > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  }, []);

  return (
    <Box
      zIndex={"100"}
      top="0"
      position={{ base: "absolute", lg: "fixed" }}
      w="100%"
    >
      <motion.nav
        animate={{
          backgroundColor: isScrolled ? "rgba(27,26,23,1)" : "rgba(27,26,23,0)",
        }}
        initial={{ backgroundColor: "rgba(27,26,23,0)" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Container py={"2rem"} maxW={"1500px"}>
          <Flex justifyContent={"space-between"} alignItems="center">
            <Box pl={"2rem"} w={{ base: "40%", lg: "25%" }}>
              <Link href="/">
                <motion.img
                  width={200}
                  height={200}
                  animate={
                    isScrolled
                      ? { scale: 1, transition: { duration: 0.5 } }
                      : { scale: 1.5, transition: { duration: 0.5 } }
                  }
                  src={"/images/headerLogo.png"}
                />
              </Link>
              {/* <Image
            width={20}
            height={20}
            style={{ width: "15rem" }}
            alt="test"
            src={"/images/logo.png"}
          /> */}
            </Box>
            {/* <Spacer display={{ base: "none", md: "none", lg: "block" }} /> */}
            <Box w={"50%"} display={{ base: "none", md: "none", xl: "flex" }}>
              <Flex gap={"2rem"} justifyContent={"center"} w={"100%"}>
                <Link aria-disabled={"true"} href="">
                  <p>Team</p>
                </Link>
                <Link href="">
                  <p>Marketplace</p>
                </Link>
                <Link href="">
                  <p>Staking</p>
                </Link>
              </Flex>
            </Box>
            {/* <Spacer /> */}
            <Box w={{ base: "50%", xl: "25%" }}>
              <Box display={{ base: "block", md: "block", xl: "none" }}>
                <IconButton
                  float={"right"}
                  bg={"transparent"}
                  mx=".5rem"
                  aria-label="test"
                  icon={<HamburgerIcon state={sidebarState} />}
                  zIndex={"10"}
                  color="white"
                  onClick={() => setSideBarState(sidebarState ? false : true)}
                ></IconButton>
              </Box>
              <Flex
                gap={".3rem"}
                display={{ base: "none", md: "none", xl: "flex" }}
              >
                <IconButton mx=".5rem" aria-label="test"></IconButton>
                <IconButton aria-label="test"></IconButton>
                <IconButton mx=".5rem" aria-label="test"></IconButton>
                <IconButton aria-label="test"></IconButton>
                {!signedInUser && (
                  <Button
                    onClick={signIn}
                    mx=".5rem"
                    variant="Secondary"
                    _hover={secondaryButtonHover}
                  >
                    Login
                  </Button>
                )}
              </Flex>
            </Box>
          </Flex>
        </Container>
        <SideBar state={sidebarState} />
      </motion.nav>
    </Box>
  );
}
