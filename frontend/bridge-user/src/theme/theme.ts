import { Noto_Sans_KR, Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { koKR } from "@mui/x-date-pickers/locales";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const NotoSans = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme(
  {
    palette: {
      mode: "dark",
      background: {
        default: "#191a1e",
        paper: "#202528",
        // default: "#000000",
        // paper: "#121212",
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiAlert: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.severity === "info" && {
              backgroundColor: "#60a5fa",
            }),
          }),
        },
      },
    },
  },
  koKR
);

export const lightTheme = createTheme({
  ...theme,
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
});

export default theme;
