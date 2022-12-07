import { extendTheme } from "@chakra-ui/react";

export const darkTheme = extendTheme({
  textStyles: {
    h1: {
      color: "white",
      fontSize: ["3rem", "3rem", "4rem"],
      fontFamily: `"Roboto", sans-serif`,
      lineHeight: "5rem",
      fontWeight: "bolder",
    },
    h2: {
      color: "white",
      fontSize: "4.4rem",
      fontFamily: `"K2D", sans-serif`,
      fontWeight: "medium",
      lineHeight: "3.5rem",
    },
    h3: {
      color: "white",
      fontSize: "2.4rem",
      fontFamily: `"K2D", sans-serif`,
      fontWeight: "medium",
      lineHeight: "3.5rem",
    },
    h4: {
      fontFamily: `"Roboto", sans-serif`,
      fontWeight: "50",
      fontSize: "1.4rem",
      color: "#D2AC47",
    },
    profile: {
      color: "white",
      fontSize: "1.4rem",
      fontFamily: `"K2D", sans-serif`,
      fontWeight: "medium",
    },
    profileSmall: {
      fontFamily: `"Roboto", sans-serif`,
      fontWeight: "50",
      fontSize: "1rem",
      color: "#D2AC47",
    },
    Logo: {
      fontSize: "4rem",
      fontFamily: "Logo",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: "#1B1A17",
      },
      h1: {
        color: "white",
        fontSize: "4rem",
        fontFamily: `"Roboto", sans-serif`,
        fontWeight: "bolder",
      },
      h2: {
        color: "white",
        fontSize: "4.4rem",
        fontFamily: `"K2D", sans-serif`,
        fontWeight: "medium",
        lineHeight: "3.5rem",
      },
      h3: {
        fontFamily: `"Roboto", sans-serif`,
        fontWeight: "50",
        fontSize: "1.4rem",
        color: "#D2AC47",
      },
      p: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        color: "white",
      },
    }),
  },
  components: {
    Button: {
      variants: {
        Primary: {
          bg: "linear-gradient(to right, white 48%, #D2AC47 50%)",
          fontFamily: `"Roboto", sans-serif`,
          fontWeight: "600",
          backgroundPosition: "right bottom",
          transition: ".4s ease",
          backgroundSize: "200% 100%",
          color: "white",
          borderTopRightRadius: "1.2rem",
          borderBottomLeftRadius: "1.2rem",
          boxShadow: "5px 4px 0px 0px white",
          paddingTop: ".1rem",
          paddingBottom: ".2rem",
          paddingLeft: "1.3rem",
          paddingRight: "1.3rem",
        },
        Secondary: {
          bg: "linear-gradient(to right, #D2AC47 50%, transparent 50%)",
          fontFamily: `"Roboto", sans-serif`,
          fontWeight: "600",
          backgroundPosition: "right bottom",
          transition: ".4s ease",
          backgroundSize: "200% 100%",
          border: "6px solid #D2AC47",
          color: "#D2AC47",
          borderTopRightRadius: "1.2rem",
          borderBottomLeftRadius: "1.2rem",
          backgroundColor: "transparent",
          boxShadow: "5px 4px 0px 0px white",
          paddingTop: ".1rem",
          paddingBottom: ".2rem",
          paddingLeft: "1.3rem",
          paddingRight: "1.3rem",
        },
        iconWhiteTransparent: {
          color: "white",
          bg: "transparent",
        },
      },
    },
  },
});
