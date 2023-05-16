import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import ArrowIcon from "./icons/arrowIcon";

export default function Faq() {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);

  const animationVariants = {
    open: {
      display: "block",
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: ".2",
      },
    },
    close: {
      opacity: 0,
      y: -50,
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

  const rotateVariants = {
    open: {
      rotate: 180,
      opacity: 1,
    },
    close: {
      rotate: 0,
      opacity: 0.1,
    },
  };
  return (
    <Box
      margin={"0 auto"}
      maxW="1200px"
      mt={"2rem"}
      px={{ base: "1.5rem", xl: "0" }}
    >
      <Text
        textAlign={{ base: "center", lg: "left" }}
        mt={"7rem"}
        textStyle="h4"
      >
        Frequently asked questions
      </Text>
      <Text textAlign={{ base: "center", lg: "left" }} textStyle="h2">
        FAQ
      </Text>
      <Text
        _hover={{ cursor: "pointer" }}
        w={{ base: "100%", lg: "50%" }}
        bg={"#2e2d2a"}
        my={"2rem"}
        display="block"
        px={"2rem"}
        py={"1rem"}
        rounded={".5rem"}
        onClick={() => (faq1 ? setFaq1(false) : setFaq1(true))}
      >
        <span
          style={{
            fontSize: "2rem",
            marginRight: "1rem",
          }}
        >
          Q1
        </span>
        <span style={{ textDecoration: "underline" }}>
          What is Albannach Mòr?
        </span>{" "}
      </Text>
      <Box
        as={motion.div}
        rounded={".5rem"}
        px={"2rem"}
        py={"1rem"}
        // bg={"#2e2d2a"}
        variants={animationVariants}
        animate={faq1 ? "open" : "close"}
      >
        <Text>
          Albannach Mòr is a dynamic and innovative whisky brand that aims to
          bring a fresh perspective to Scottish whisky. Our goal is to
          revolutionise the industry by leveraging Web3 technology to create an
          intriguing outlook on Scottish whisky. By utilising the latest
          advancements in Web3 and blockchain technology, we intend to bring
          together whisky enthusiasts from around the world and create a unique,
          collaborative experience that celebrates the rich history and culture
          of Scotland's beloved spirit. Join us on this exciting journey as we
          explore new horizons and push the boundaries of what's possible in the
          world of whisky.{" "}
        </Text>
      </Box>

      <Text
        _hover={{ cursor: "pointer" }}
        w={{ base: "100%", lg: "50%" }}
        bg={"#2e2d2a"}
        my={"2rem"}
        display="block"
        px={"2rem"}
        py={"1rem"}
        rounded={".5rem"}
        onClick={() => (faq2 ? setFaq2(false) : setFaq2(true))}
      >
        <span
          style={{
            fontSize: "2rem",
            marginRight: "1rem",
          }}
        >
          Q2
        </span>
        <span style={{ textDecoration: "underline" }}>What is Web3?</span>{" "}
      </Text>
      <Box
        as={motion.div}
        rounded={".5rem"}
        px={"2rem"}
        py={"1rem"}
        variants={animationVariants}
        animate={faq2 ? "open" : "close"}
      >
        <Text>
          Web3, or 'Web 3.0', is the next evolution of the internet, which aims
          to be more decentralised, secure, and user-centric than the current
          Web 2.0. At its core, web3 is based on blockchain technology, a
          distributed database that enables secure and transparent transactions
          without intermediaries like banks or governments, resulting in a more
          decentralised network. Web3 also includes smart contracts,
          self-executing contracts with terms written into lines of code,
          allowing for automated and transparent transactions without
          third-party enforcement. Overall, web3 seeks to create an open,
          transparent, and decentralised internet that empowers individuals and
          communities, rather than relying on centralised institutions. It has
          the potential to revolutionise industries such as finance, gaming,
          social media, and even the whisky and wine industry.{" "}
        </Text>
      </Box>

      <Text
        _hover={{ cursor: "pointer" }}
        bg={"#2e2d2a"}
        my={"2rem"}
        display="block"
        px={"2rem"}
        py={"1rem"}
        w={{ base: "100%", lg: "50%" }}
        rounded={".5rem"}
        onClick={() => (faq3 ? setFaq3(false) : setFaq3(true))}
      >
        <span
          style={{
            fontSize: "2rem",
            marginRight: "1rem",
          }}
        >
          Q3
        </span>
        <span style={{ textDecoration: "underline" }}>
          What’s the advantages of Web3 in the whisky industry?
        </span>{" "}
      </Text>
      <Box
        as={motion.div}
        rounded={".5rem"}
        px={"2rem"}
        py={"1rem"}
        variants={animationVariants}
        animate={faq3 ? "open" : "close"}
      >
        <Text>
          The integration of web3 technology into the whisky industry offers
          several advantages. First, it provides increased transparency in the
          supply chain by utilising blockchain to track the production and
          distribution of whisky, ensuring the authenticity and quality of the
          product. Second, it allows for greater accessibility to rare and
          unique bottles of whisky through decentralised marketplaces and
          auctions, which can connect buyers and sellers from around the world.
          Finally, it enables the creation of personalised experiences for
          consumers through the use of non-fungible tokens (NFTs), which can be
          used to verify ownership of bottles and provide access to exclusive
          events and content. Overall, the adoption of web3 technology has the
          potential to revolutionise the whisky industry by enhancing trust,
          expanding market opportunities, and creating new forms of engagement
          between producers and consumers.{" "}
        </Text>
      </Box>

      {/* <Text
        _hover={{ cursor: "pointer" }}
        bg={"#2e2d2a"}
        my={"2rem"}
        display="block"
        px={"2rem"}
        py={"1rem"}
        w={{ base: "100%", lg: "50%" }}
        rounded={".5rem"}
        onClick={() => (faq4 ? setFaq4(false) : setFaq4(true))}
      >
        <span
          style={{
            fontSize: "2rem",
            marginRight: "1rem",
          }}
        >
          Q4
        </span>
        <span style={{ textDecoration: "underline" }}>How many can I mint</span>{" "}
      </Text>
      <Box
        as={motion.div}
        rounded={".5rem"}
        px={"2rem"}
        py={"1rem"}
        variants={animationVariants}
        animate={faq4 ? "open" : "close"}
      >
        <Text>
          The maximum mint will be 2 per wallet. Note that each wallet has a
          unique mint signature that can only be used once. You must decide if
          you want 1 or 2 mints at time of mint. For the avoidance of doubt, you
          will not be able to mint one and return to mint a second.{" "}
        </Text>
      </Box> */}

      {/* <Text
        _hover={{ cursor: "pointer" }}
        bg={"#2e2d2a"}
        my={"2rem"}
        display="block"
        w={{ base: "100%", lg: "50%" }}
        px={"2rem"}
        py={"1rem"}
        rounded={".5rem"}
        onClick={() => (faq5 ? setFaq5(false) : setFaq5(true))}
      >
        <span
          style={{
            fontSize: "2rem",
            marginRight: "1rem",
          }}
        >
          Q5
        </span>
        <span style={{ textDecoration: "underline" }}>
          Am I guaranteed to mint
        </span>{" "}
      </Text>
      <Box
        as={motion.div}
        rounded={".5rem"}
        px={"2rem"}
        py={"1rem"}
        variants={animationVariants}
        animate={faq5 ? "open" : "close"}
      >
        <Text>
          Only those who have fill in the application form and have a whisky
          club membership will be guaranteed up to 2 mints.{" "}
        </Text>
      </Box> */}

      {/* <Text
        bg={"#2e2d2a"}
        my={"2rem"}
        w={"50%"}
        display="block"
        px={"2rem"}
        py={"1rem"}
        rounded={".5rem"}
        onClick={() => (faq6 ? setFaq6(false) : setFaq6(true))}
      >
        <span
          style={{
            fontSize: "2rem",
            marginRight: "1rem",
          }}
        >
          Q6
        </span>
        <span style={{ textDecoration: "underline" }}>
          What utility does Albannach Mòr hold
        </span>{" "}
      </Text>
      <Box
        as={motion.div}
        rounded={".5rem"}
        px={"2rem"}
        py={"1rem"}
        variants={animationVariants}
        animate={faq6 ? "open" : "close"}
      >
        <Text>
          Albannach Mòr will have a combination of different utilities. Although
          our premium Utility will be through our partnership with … whisky
          distillery. This allows us to invest 50% of sales straight back into
          the project by investing in casks and pallets for holders of the
          tokens.{" "}
        </Text>
        <Text>
          We will also hold a marketplace which you will collect our very own
          $DRAM based on the amount of tokens you hold and is exclusive only to
          our marketplace. This will allow you to buy trade and invest in luxury
          whisky’s, trips and more.{" "}
        </Text>
      </Box>
      <Text
        bg={"#2e2d2a"}
        my={"2rem"}
        w={"50%"}
        display="block"
        px={"2rem"}
        py={"1rem"}
        rounded={".5rem"}
        onClick={() => (faq6 ? setFaq6(false) : setFaq6(true))}
      >
        <span
          style={{
            fontSize: "2rem",
            marginRight: "1rem",
          }}
        >
          Q7
        </span>
        <span style={{ textDecoration: "underline" }}>
          What utility does Albannach Mòr hold
        </span>{" "}
      </Text>
      <Box
        as={motion.div}
        rounded={".5rem"}
        px={"2rem"}
        py={"1rem"}
        variants={animationVariants}
        animate={faq6 ? "open" : "close"}
      >
        <Text>
          Albannach Mòr will have a combination of different utilities. Although
          our premium Utility will be through our partnership with … whisky
          distillery. This allows us to invest 50% of sales straight back into
          the project by investing in casks and pallets for holders of the
          tokens.{" "}
        </Text>
        <Text>
          We will also hold a marketplace which you will collect our very own
          $DRAM based on the amount of tokens you hold and is exclusive only to
          our marketplace. This will allow you to buy trade and invest in luxury
          whisky’s, trips and more.{" "}
        </Text>
      </Box>
      <Text
        bg={"#2e2d2a"}
        my={"2rem"}
        w={"50%"}
        display="block"
        px={"2rem"}
        py={"1rem"}
        rounded={".5rem"}
        onClick={() => (faq6 ? setFaq6(false) : setFaq6(true))}
      >
        <span
          style={{
            fontSize: "2rem",
            marginRight: "1rem",
          }}
        >
    {base: "100%", lg: "50%"}
        </span>
        <span style={{ textDecoration: "underline" }}>
          What utility does Albannach Mòr hold
        </span>{" "}
      </Text>
      <Box
        as={motion.div}
        rounded={".5rem"}
        px={"2rem"}
        py={"1rem"}
        variants={animationVariants}
        animate={faq6 ? "open" : "close"}
      >
        <Text>
          Albannach Mòr will have a combination of different utilities. Although
          our premium Utility will be through our partnership with … whisky
          distillery. This allows us to invest 50% of sales straight back into
          the project by investing in casks and pallets for holders of the
          tokens.{" "}
        </Text>
        <Text>
          We will also hold a marketplace which you will collect our very own
          $DRAM based on the amount of tokens you hold and is exclusive only to
          our marketplace. This will allow you to buy trade and invest in luxury
          whisky’s, trips and more.{" "}
        </Text>
      </Box>
      <Text
        bg={"#2e2d2a"}
        my={"2rem"}
        w={"50%"}
        display="block"
        px={"2rem"}
        py={"1rem"}
        rounded={".5rem"}
        onClick={() => (faq6 ? setFaq6(false) : setFaq6(true))}
      >
        <span
          style={{
            fontSize: "2rem",
            marginRight: "1rem",
          }}
        >
          Q9
        </span>
        <span style={{ textDecoration: "underline" }}>
          What utility does Albannach Mòr hold
        </span>{" "}
      </Text>
      <Box
        as={motion.div}
        rounded={".5rem"}
        px={"2rem"}
        py={"1rem"}
        variants={animationVariants}
        animate={faq6 ? "open" : "close"}
      >
        <Text>
          Albannach Mòr will have a combination of different utilities. Although
          our premium Utility will be through our partnership with … whisky
          distillery. This allows us to invest 50% of sales straight back into
          the project by investing in casks and pallets for holders of the
          tokens.{" "}
        </Text>
        <Text>
          We will also hold a marketplace which you will collect our very own
          $DRAM based on the amount of tokens you hold and is exclusive only to
          our marketplace. This will allow you to buy trade and invest in luxury
          whisky’s, trips and more.{" "}
        </Text>
      </Box> */}
    </Box>
  );
}
