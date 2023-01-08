import { Flex, Box, IconButton, Container } from "@chakra-ui/react";
import { whiteToGoldColor } from "../themes/hoverStyles";
import FacebooIcon from "./icons/FacebookIcon";
import LinkedIcon from "./icons/LinkedIn";
import TwitterIcon from "./icons/TwitterIcon";

export default function Footer() {
  return (
    <Box mb={"5rem"} width={"100%"} mt={"12rem"}>
      <Container maxW="1200px">
        <Flex justifyContent={"space-between"}>
          <h1>Albannach</h1>
          <Flex alignItems={"center"}>
            <IconButton
              _hover={whiteToGoldColor}
              transition={".3s"}
              variant="iconWhiteTransparent"
              aria-label="test"
              icon={<TwitterIcon />}
            />
            <IconButton
              transition={".3s"}
              _hover={whiteToGoldColor}
              py={"2rem"}
              variant="iconWhiteTransparent"
              aria-label="test"
              icon={<LinkedIcon />}
            />
            <IconButton
              _hover={whiteToGoldColor}
              transition={".3s"}
              variant="iconWhiteTransparent"
              aria-label="test"
              icon={<FacebooIcon />}
            />
          </Flex>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Box>
            <h2>Navigate</h2>
          </Box>
          <Box>
            <h2>Navigate</h2>
          </Box>
          <Box>
            <h2>Navigate</h2>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
