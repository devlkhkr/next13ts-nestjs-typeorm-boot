import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

import MuiList, { ListProps as MuiListProps } from "@mui/material/List";

import { SxProps, Theme, useMediaQuery } from "@mui/material";
import { menuBundle } from "@/types/menu";

import { styled } from "@mui/material/styles";
import MenuPaper from "../atoms/MenuPaper";
import { useRecoilState } from "recoil";
import { AtomLeftMenuOpen } from "@/recoil/atoms";
import theme from "@/theme/theme";
import { usePathname } from "next/navigation";

const MenuBox = styled(MuiList)(({ theme }) => ({}));

export default function MenuBundle({
  menu,
  sx,
}: {
  menu: menuBundle[];
  sx?: SxProps<Theme>;
}) {
  const pathName = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [leftMenuOpen, setLeftMenuOpen] = useRecoilState(AtomLeftMenuOpen);
  const getCurrentStyle = (href: string | undefined) => {
    let current = pathName === href;
    if (href === "/") {
      return {
        ".MuiTypography-root": {
          color: "#4d57f0",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "math, serif",
          "&::after": {
            content: "''",
            display: "inline-block",
            width: "4px",
            height: "4px",
            borderRadius: "100%",
            marginLeft: "12px",
            backgroundColor: "#e53019",
          },
        },
      };
    } else if (href) {
      return {
        "svg, span": {
          opacity: current ? 1 : 0.75,
          fontWeight: current ? 600 : 400,
          color: current ? "#737feb" : "",
        },
      };
    } else {
      return {
        color: "",
      };
    }
  };
  return (
    <>
      <MenuPaper sx={sx}>
        <MenuBox>
          {menu.map(({ text, href, icon: Icon }, index) => (
            <ListItem
              key={index}
              disablePadding
              onClick={() => {
                isMobile ? setLeftMenuOpen(false) : void 0;
              }}
              sx={getCurrentStyle(href)}
            >
              <ListItemButton component={Link} href={href || ""}>
                {Icon ? (
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                ) : (
                  <></>
                )}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </MenuBox>
      </MenuPaper>
    </>
  );
}
