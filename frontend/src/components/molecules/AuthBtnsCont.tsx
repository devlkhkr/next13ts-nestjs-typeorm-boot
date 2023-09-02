"use client";
import { Box } from "@mui/material";
import { endianness } from "os";
import Btn from "../atoms/Button";

const AuthBtnsContStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "end",
  gap: 2,
};

export default function AuthBtnsCont() {
  const joinBtnHandler = () => {
    console.log("join");
  };
  const loginBtnHandler = () => {
    console.log("login");
  };
  return (
    <Box sx={AuthBtnsContStyle}>
      <Btn label="가입하기" onClick={joinBtnHandler} />
      <Btn label="로그인하기" onClick={loginBtnHandler} />
    </Box>
  );
}
