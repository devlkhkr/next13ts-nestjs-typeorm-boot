import { DRAWER_WIDTH } from "@/constants/layout";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Box, Toolbar, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import AuthBtnsCont from "../molecules/AuthBtnsCont";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import theme from "@/theme/theme";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.background.paper,
  backgroundImage: "unset",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH + 8}px)`,
    marginLeft: `${DRAWER_WIDTH + 8}px`,
    marginTop: "8px",
    marginRight: "8px",
    borderRadius: "8px 8px 0 0",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    borderRadius: 0,
    margin: 0,
  },
}));

export default function Header({
  leftMenuOpen,
  setLeftMenuOpen,
}: {
  leftMenuOpen: boolean;
  setLeftMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <AppBar position="fixed" open={leftMenuOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => {
            setLeftMenuOpen(!leftMenuOpen);
          }}
          edge="start"
        >
          {leftMenuOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <AuthBtnsCont />
      </Toolbar>
    </AppBar>
  );
}
