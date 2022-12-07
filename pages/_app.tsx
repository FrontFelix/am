import "../styles/globals.css";
import "../styles/roadmap.css";
import type { AppProps } from "next/app";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import { darkTheme } from "../themes/darkTheme";
import { lightTheme } from "../themes/lightTheme";
import React, { useEffect } from "react";
import { useState } from "react";
import "@fontsource/k2d";
import {
  primaryButtonHover,
  secondaryButtonHover,
} from "../themes/hoverStyles";
import Navbar from "../components/navbar";
import "material-icons/iconfont/material-icons.css";
import "@fontsource/eagle-lake";
import { AnimateSharedLayout } from "framer-motion";
// import Swiper styles
import "swiper/css";

export default function App({ Component, pageProps }: AppProps) {
  const [light, setLight] = useState(false);
  return (
    <ChakraProvider theme={light ? lightTheme : darkTheme}>
      <AnimateSharedLayout>
        <Navbar />
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ChakraProvider>
  );
}
