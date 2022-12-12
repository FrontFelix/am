import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { getStaff, getStaffs, StaffTeam } from "../api/staff";

export default function MemberPage({ member }: any) {
  return (
    <Box>
      <motion.img
        style={{
          objectFit: "cover",
          width: "60rem",
          height: "100vh",
          position: "absolute",
          top: "0",
          opacity: ".3",
          filter: "drop-shadow(13px 0px 0px #525252)",
        }}
        src={member.imageSrc}
        layoutId="1"
      />
      <Container
        pos={"relative"}
        mt={{ base: "0", lg: "10rem" }}
        maxW={"1200px"}
      >
        <Flex px={".5rem"} pt={"2rem"} flexDir={{ base: "column", lg: "row" }}>
          <Box alignSelf={"center"} w={{ base: "100%", lg: "33%" }}></Box>
          <Box width={{ base: "100%", lg: "66%" }} px={"4rem"}>
            <Text
              textAlign={{ base: "center", lg: "left" }}
              fontSize={{ base: "1rem", lg: "2rem" }}
              pt={"1rem"}
              textStyle="profile"
            >
              {member.name}
            </Text>
            <Text pt={"1rem"}>{member.description.row1}</Text>
            <Text py={"1rem"}>{member.description.row2}</Text>
            <Text>{member.description.row3}</Text>
          </Box>
        </Flex>
        <Text
          as={motion.h1}
          layoutId="role"
          fontSize={"2rem"}
          sx={{ writingMode: "vertical-rl" }}
          pos={"absolute"}
          minH={"40rem"}
          top={"0"}
          right={"0"}
          textAlign={{ base: "center", lg: "left" }}
          textStyle="profileSmall"
        >
          {member.role}
        </Text>
      </Container>
    </Box>
  );
}

export async function getStaticProps({ params }: any) {
  const member = await getStaff(params.member);
  return {
    props: { member },
  };
}

export async function getStaticPaths() {
  const members = await getStaffs();
  const paths = members.map((user: StaffTeam) => {
    return {
      params: {
        member: user.name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
