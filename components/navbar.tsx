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
import { secondaryButtonHover } from "../themes/hoverStyles";

export default function Navbar() {
  return (
    <Container py={"2rem"} maxW={"1500px"}>
      <Flex justifyContent={"space-between"} alignItems="center">
        <Box w={"25%"}>
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
        <Box w={"50%"} display={{ base: "none", md: "none", lg: "flex" }}>
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
        <Box w={"25%"}>
          <Flex>
            <IconButton
              display={{ base: "none", md: "none", lg: "block" }}
              mx=".5rem"
              aria-label="test"
            ></IconButton>
            <IconButton
              display={{ base: "none", md: "none", lg: "block" }}
              aria-label="test"
            ></IconButton>
            <IconButton
              display={{ base: "none", md: "none", lg: "block" }}
              mx=".5rem"
              aria-label="test"
            ></IconButton>
            <IconButton
              display={{ base: "none", md: "none", lg: "block" }}
              aria-label="test"
            ></IconButton>
            <Switch
              display={{ base: "none", md: "none", lg: "block" }}
              alignSelf={"center"}
              colorScheme="yellow"
            />
            <Button
              display={{ base: "none", md: "none", lg: "block" }}
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
  );
}
