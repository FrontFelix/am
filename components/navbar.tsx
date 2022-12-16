import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
  Spacer,
  Switch,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { secondaryButtonHover } from "../themes/hoverStyles";
import HamburgerIcon from "./icons/hamburgerIcon";
import SideBar from "./SideBar";

export default function Navbar() {
  const [sidebarState, setSideBarState] = useState(false);
  return (
    <Box zIndex={"100"} position={{ base: "absolute", xl: "unset" }} w="100%">
      <Container py={"2rem"} maxW={"1500px"}>
        <Flex justifyContent={"space-between"} alignItems="center">
          <Box w={{ base: "50%", lg: "25%" }}>
            <Text textStyle="Logo">AM</Text>
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
            <Flex justifyContent={"center"} w={"100%"}>
              <a href="">
                <p>Team</p>
              </a>
              <Link px="1.5rem" href="">
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
            <Flex display={{ base: "none", md: "none", xl: "flex" }}>
              <IconButton mx=".5rem" aria-label="test"></IconButton>
              <IconButton aria-label="test"></IconButton>
              <IconButton mx=".5rem" aria-label="test"></IconButton>
              <IconButton aria-label="test"></IconButton>
              <Switch alignSelf={"center"} colorScheme="yellow" />
              <Button
                mx=".5rem"
                variant="Secondary"
                _hover={secondaryButtonHover}
              >
                Login
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
      <SideBar state={sidebarState} />
    </Box>
  );
}
