"use client";
import { DRAWER_WIDTH } from "@/constants/layout";
import { Backdrop, Box, IconButton, Theme, useMediaQuery } from "@mui/material";
import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import MuiTypo, {
  TypographyProps as MuiTypographyProps,
} from "@mui/material/Typography";
import Header from "../organisms/Header";
import { styled, useTheme } from "@mui/material/styles";
import { ReactNode, useEffect, useState } from "react";
import SideMenuList from "../organisms/SideMenuList";
import CntsWrap from "../organisms/CntsWrap";
import Link from "next/link";
import MenuPaper from "../atoms/MenuPaper";

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: DRAWER_WIDTH,
    boxSizing: "border-box",
    borderRight: 0,
    backgroundColor: theme.palette.background.default,
  },
}));

const Typo = styled(MuiTypo)(({ theme }) => ({
  width: "100%",
  padding: "0 16px",
  a: {
    textDecoration: "unset",
    color: "#fff",
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const backDropStyle = {
  zIndex: (theme: Theme) => theme.zIndex.drawer - 1,
};

export default function MainGrid({ children }: { children: ReactNode }) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [leftMenuOpen, setLeftMenuOpen] = useState(!isMobile);

  useEffect(() => {
    setLeftMenuOpen(!isMobile);
  }, [isMobile]);

  return (
    <Box sx={{ display: "flex" }}>
      {isMobile && (
        <Backdrop
          sx={backDropStyle}
          open={leftMenuOpen}
          onClick={() => setLeftMenuOpen(false)}
        />
      )}
      <Header leftMenuOpen={leftMenuOpen} setLeftMenuOpen={setLeftMenuOpen} />
      <Drawer variant="persistent" anchor="left" open={leftMenuOpen}>
        <DrawerHeader>
          <MenuPaper
            sx={{
              width: "100%",
              margin: 0,
              height: "48px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typo>
              <Link href={"/"}>Bridge</Link>
            </Typo>
          </MenuPaper>
        </DrawerHeader>
        <SideMenuList />
      </Drawer>
      <CntsWrap open={leftMenuOpen}>{children}</CntsWrap>
    </Box>
  );
}
