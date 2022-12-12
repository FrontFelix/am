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
    <Box my={"2rem"}>
      <Text
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
          When is Albannach Mòr mint
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
          Gen 1 is only available to people who fill in the application form and
          those who are Whisky Club members and the day it to be confirmed{" "}
        </Text>
      </Box>

      <Text
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
        <span style={{ textDecoration: "underline" }}>
          Do you have direct contact with your whisky distillery partnership
        </span>{" "}
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
          Yes, we deal directly with … distillery. Confirming regular updates on
          both ends to ensure everything is exactly where it needs to be to
          provide the best possible service to our community.{" "}
        </Text>
      </Box>

      <Text
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
          What is the Mint Price
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
          Mint price is 0.5 ETH. For those on the whitelist for a discounted
          mint (Whisky Club, mint price is 0.35 ET{" "}
        </Text>
      </Box>

      <Text
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
      </Box>

      <Text
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
      </Box>

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
