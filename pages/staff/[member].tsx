import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getStaff, getStaffs, StaffTeam } from "../api/staff";

export default function MemberPage({ member }: any) {
  const [topMargin, setTopmargin] = useState(
    member.id === "David"
      ? "-15rem"
      : member.id === "Justin"
      ? "-15rem"
      : "-15rem"
  );
  return (
    <Box mt={"8rem"} mb={"30rem"}>
      <motion.img
        style={{
          objectFit: "cover",
          objectPosition: member.id === "Jake" ? "center -20rem" : "top",
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: topMargin,
          opacity: ".1",
        }}
        src={member.imageSrc}
        layoutId="1"
      />
      <Container
        pos={"relative"}
        mt={{ base: "0", lg: "3rem" }}
        maxW={"1200px"}
      >
        <Flex
          px={".5rem"}
          pt={{ base: "5rem", lg: "0" }}
          flexDir={{ base: "column", lg: "row" }}
        >
          {/* <Box alignSelf={"center"} w={{ base: "100%", lg: "10%" }}></Box> */}
          <Box width={{ base: "100%" }} px={"2rem"}>
            <Text
              textAlign={{ base: "center", lg: "left" }}
              fontSize={{ base: "1rem", lg: "3rem" }}
              pt={"1rem"}
              textStyle="profile"
            >
              {member.name}
            </Text>
            <Text
              as={motion.h1}
              layoutId="role"
              fontSize={"1rem"}
              textAlign={{ base: "center", lg: "left" }}
              textStyle="profileSmall"
              pt={{ base: ".1rem", lg: "1rem" }}
            >
              {member.role}
            </Text>
            <Flex
              mt={"5rem"}
              flexDir={{ base: "column", lg: "row" }}
              justifyContent={"space-between"}
            >
              <Text
                pb={{ base: ".5rem", lg: "0" }}
                textStyle="profile"
                pr={"8rem"}
              >
                BIO
              </Text>
              <Box>
                <Text fontSize={"1.2rem"}>{member.description.row1}</Text>
                <Text fontSize={"1.2rem"} py={"1rem"}>
                  {member.description.row2}
                </Text>
                <Text fontSize={"1.2rem"}>{member.description.row3}</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
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
        member: user.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
