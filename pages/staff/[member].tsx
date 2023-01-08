import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { getStaff, getStaffs, StaffTeam } from "../api/staff";

export default function MemberPage({ member }: any) {
  return (
    <Box mb={"30rem"}>
      <motion.img
        style={{
          objectFit: "cover",
          objectPosition: "top",
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: "0",
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
        <Flex px={".5rem"} pt={"0rem"} flexDir={{ base: "column", lg: "row" }}>
          {/* <Box alignSelf={"center"} w={{ base: "100%", lg: "10%" }}></Box> */}
          <Box width={{ base: "100%" }} px={"2rem"}>
            <Text
              textAlign={{ base: "center", lg: "left" }}
              fontSize={{ base: "1rem", lg: "2rem" }}
              pt={"1rem"}
              textStyle="profile"
            >
              {member.name}
            </Text>
            <Text
              as={motion.h1}
              layoutId="role"
              fontSize={"2rem"}
              textAlign={{ base: "center", lg: "left" }}
              textStyle="profileSmall"
            >
              {member.role}
            </Text>
            <Flex mt={"5rem"} justifyContent={"space-between"}>
              <Text textStyle="profile" pr={"8rem"}>
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
        member: user.name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
