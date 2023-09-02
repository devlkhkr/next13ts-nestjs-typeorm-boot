import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

import MuiList, { ListProps as MuiListProps } from "@mui/material/List";

import { SxProps, Theme } from "@mui/material";
import { menuBundle } from "@/types/menu";

import { styled } from "@mui/material/styles";
import MenuPaper from "../atoms/MenuPaper";

const MenuBox = styled(MuiList)(({ theme }) => ({}));

export default function MenuBundle({
  menu,
  sx,
}: {
  menu: menuBundle[];
  sx?: SxProps<Theme>;
}) {
  return (
    <>
      <MenuPaper sx={sx}>
        <MenuBox>
          {menu.map(({ text, href, icon: Icon }, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} href={href || ""}>
                <ListItemIcon>
                  <Icon style={{ color: "#b3b3b3" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "#b3b3b3" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </MenuBox>
      </MenuPaper>
    </>
  );
}
