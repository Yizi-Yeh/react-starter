import { extendTheme } from "@chakra-ui/react";
import breakpoints from "./breakpoints";
import colors from "./colors";
import fonts from "./fonts";
import textStyles from "./textStyles";

const customTheme = {
  colors,
  fonts,
  textStyles,
  breakpoints,
  styles: {
    global: {
      "html, body": {
        minHeight: "100%",
        boxSizing: "border-box",
      },
    },
  },
};

const theme = extendTheme(customTheme);

export default theme;
