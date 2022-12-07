import { Box, Flex, Text } from "@chakra-ui/react";

interface props {
  headerText: string;
  subHeaderText: string;
  active: string;
  box1: {
    header: string;
    text: string;
  };
  box2: {
    header: string;
    text: string;
  };
  box3: {
    header: string;
    text: string;
  };
  box4: {
    header: string;
    text: string;
  };
}

export default function FormStep({
  headerText,
  subHeaderText,
  active,
  box1,
  box2,
  box3,
  box4,
}: props) {
  return (
    <Box
      height={"18rem"}
      id="content-roadmap"
      textStyle="h3"
      className={`form-one form-step ${active}`}
    >
      <Text textStyle="h3">{headerText}</Text>
      <Text textStyle="h4">{subHeaderText}</Text>
      <Flex
        mt={"2rem"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center" }}
      >
        <Box pr={{ base: "0", lg: ".8rem" }} w={{ base: "100%", lg: "33%" }}>
          <Text textStyle="h4">{box1.header}</Text>
          <Text>{box1.text}</Text>
        </Box>
        <Box
          py={{ base: "2rem", lg: "0" }}
          px={{ base: "0", lg: ".8rem" }}
          w={{ base: "100%", lg: "33%" }}
        >
          <Text textStyle="h4">{box2.header}</Text>
          <Text>{box2.text}</Text>
        </Box>
        <Box px={{ base: "0", lg: ".8rem" }} w={{ base: "100%", lg: "33%" }}>
          <Text textStyle="h4">{box3.header}</Text>
          <Text textStyle="p">{box3.text}</Text>
        </Box>
        {/* <Box pl={".8rem"} w={"25%"}>
        <Text textStyle="h4">{box4.header}</Text>
        <Text>{box4.text}</Text>
      </Box> */}
      </Flex>
    </Box>
  );
}
