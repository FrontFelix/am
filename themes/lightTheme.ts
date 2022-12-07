import { extendTheme } from "@chakra-ui/react";

export const lightTheme = extendTheme({
    styles: {
        global: (props : any) => ({
          body: {
            bg: "#DEE4E7",
          }
        })
    },
})