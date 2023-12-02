import MuiPaper, { PaperProps as MuiPaperProps } from "@mui/material/Paper";

import { SxProps, Theme } from "@mui/material";

import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

const MenuPaperStyled = styled(MuiPaper)(({ theme }) => ({
  borderRadius: 8,
  backgroundColor: theme.palette.background.paper,
  backgroundImage: "unset",
  boxShadow: theme.palette.mode === "dark" ? "" : "unset",
}));

export default function MenuPaper({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: SxProps<Theme>;
}) {
  return (
    <>
      <MenuPaperStyled elevation={3} sx={sx}>
        {children}
      </MenuPaperStyled>
    </>
  );
}
