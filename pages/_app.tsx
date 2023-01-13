import "../styles/globals.css";
import "../styles/roadmap.css";
import type { AppProps } from "next/app";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import { darkTheme } from "../themes/darkTheme";
import { lightTheme } from "../themes/lightTheme";
import React, { useEffect } from "react";
import { useState } from "react";
import "@fontsource/k2d";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  primaryButtonHover,
  secondaryButtonHover,
} from "../themes/hoverStyles";
import Navbar from "../components/navbar";
import "material-icons/iconfont/material-icons.css";
import "@fontsource/eagle-lake";
import { AnimateSharedLayout, useScroll } from "framer-motion";
// import Swiper styles
import "swiper/css";
import { UserWrapper } from "../utils/context/userContext";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [light, setLight] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    console.log(scrollY.get());
  }, [scrollY]);
  return (
    <ChakraProvider theme={light ? lightTheme : darkTheme}>
      <UserWrapper>
        <AnimateSharedLayout>
          <Box position={"relative"} height={"100%"}>
            <Navbar />
            <Component {...pageProps} />
          </Box>
          <ToastContainer />
          <Footer />
        </AnimateSharedLayout>
      </UserWrapper>
    </ChakraProvider>
  );
}
