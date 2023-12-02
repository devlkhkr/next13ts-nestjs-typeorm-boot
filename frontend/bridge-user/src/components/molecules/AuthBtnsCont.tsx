"use client";
import {
  Avatar,
  Box,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Popover,
} from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { DarkModeSwitch } from "../atoms/DarkModeSwitch";
import { AtomDarkMode } from "@/recoil/atoms";
import { useRecoilState } from "recoil";

const AuthBtnsContStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "end",
  gap: 2,
};

export default function AuthBtnsCont() {
  const [darkMode, setDarkMode] = useRecoilState(AtomDarkMode);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const { data: session } = useSession();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Box sx={AuthBtnsContStyle}>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        style={{
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          appearance: "none",
          background: "#444",
          border: 0,
          borderRadius: "100%",
        }}
      >
        {session?.user.image ? (
          <Avatar alt="Remy Sharp" src={session.user.image} />
        ) : (
          <PersonIcon htmlColor="#ffffff" />
        )}
      </button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List sx={{ width: 300 }} component="nav" aria-label="mailbox folders">
          {session ? (
            <ListItem divider>
              {`${session?.user?.name} (${session?.user?.email})`}
            </ListItem>
          ) : (
            <></>
          )}
          <ListItem divider>
            <FormControlLabel
              control={
                <DarkModeSwitch
                  sx={{ m: 1 }}
                  checked={darkMode}
                  onChange={() => {
                    setDarkMode(!darkMode);
                  }}
                />
              }
              label={darkMode ? "다크 모드" : "라이트 모드"}
            />
          </ListItem>
          <ListItem button>
            {session ? (
              <ListItemText primary="로그아웃 하기" onClick={() => signOut()} />
            ) : (
              <ListItemText primary="로그인하기" onClick={() => signIn()} />
            )}
          </ListItem>
        </List>
      </Popover>
    </Box>
  );
}
