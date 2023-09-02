import { DRAWER_WIDTH } from "@/constants/layout";
import { useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { ReactNode } from "react";
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  width: "100%",
  height: "calc(100% - 64px)",
  position: "fixed",
  left: `${DRAWER_WIDTH}px`,
  top: "64px",
  flexGrow: 1,
  background: "linear-gradient(175deg, #242424, #121212)",
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH + 8}px)`,
    height: "calc(100% - 80px)",
    borderRadius: "0 0 8px 8px",
    top: "72px",
    marginRight: "8px",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  [theme.breakpoints.down("sm")]: {
    transition: "unset",
    left: 0,
    height: "calc(100% - 56px)",
    width: "100%",
    top: "56px",
    margin: 0,
  },
  //모바일
}));

export default function CntsWrap({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  return <Main open={open}>{children}</Main>;
}
