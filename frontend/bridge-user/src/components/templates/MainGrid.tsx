"use client";
import { DRAWER_WIDTH } from "@/constants/layout";
import { Backdrop, Box, IconButton, Theme, useMediaQuery } from "@mui/material";
import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";

import Header from "../organisms/Header";
import { styled, useTheme } from "@mui/material/styles";
import { ReactNode, useEffect, useState } from "react";
import SideMenuList from "../organisms/SideMenuList";
import CntsWrap from "../organisms/CntsWrap";
import { Session } from "next-auth";
import { AtomLeftMenuOpen, useRecoilSSR } from "@/recoil/atoms";
import { useRecoilState } from "recoil";

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: DRAWER_WIDTH,
    height: "calc(100% - 8px)",
    gap: "8px",
    padding: "0 8px 8px",
    marginTop: "8px",
    boxSizing: "border-box",
    borderRight: 0,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      marginTop: "0",
      padding: "8px",
    },
  },
}));

const backDropStyle = {
  zIndex: (theme: Theme) => theme.zIndex.drawer - 1,
};

export default function MainGrid({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const [leftMenuOpen, setLeftMenuOpen] = useRecoilState(AtomLeftMenuOpen);
  const [leftMenuOpen, setLeftMenuOpen] = useRecoilSSR(AtomLeftMenuOpen, true);

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
      <Header />
      <Drawer variant="persistent" anchor="left" open={leftMenuOpen}>
        <SideMenuList />
      </Drawer>
      <CntsWrap open={leftMenuOpen}>{children}</CntsWrap>
    </Box>
  );
}
