import { DRAWER_WIDTH } from "@/constants/layout";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Box, Stack, Toolbar, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import AuthBtnsCont from "../molecules/AuthBtnsCont";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import { getPathName } from "@/util/util";
import { MenuOpen } from "@mui/icons-material";
import { Session } from "next-auth";
import { useRecoilState } from "recoil";
import { AtomLeftMenuOpen } from "@/recoil/atoms";
import theme from "@/theme/theme";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.background.paper,
  backgroundImage: "unset",
  color: "inherit",
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
  boxShadow: theme.palette.mode === "dark" ? "" : "unset",
  borderBottom: theme.palette.mode === "dark" ? "" : "1px solid #ddd",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    borderRadius: 0,
    margin: 0,
    zIndex: 1030,
  },
}));

export default function Header() {
  const pathName = usePathname();
  const [leftMenuOpen, setLeftMenuOpen] = useRecoilState(AtomLeftMenuOpen);
  return (
    <AppBar position="fixed" open={leftMenuOpen}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          onClick={() => {
            setLeftMenuOpen(!leftMenuOpen);
          }}
          edge="start"
        >
          {leftMenuOpen ? <MenuOpen /> : <MenuIcon />}
        </IconButton>
        <Stack
          sx={{
            width: "100%",
            paddingLeft: 1,
          }}
        >
          <Typography>{getPathName(pathName)}</Typography>
        </Stack>
        <AuthBtnsCont />
      </Toolbar>
    </AppBar>
  );
}
