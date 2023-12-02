"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";
import Btn from "../atoms/Button";

const EmptyStyle = {
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexFlow: "column",
  gap: "16px",
  padding: "40px",
};

const EmptyTitleStyle = {
  fontSize: "18px",
  fontWeight: 600,
};

const EmptyMsgStyle = {
  marginBottom: "24px",
};

export default function Empty({
  title,
  message,
  btnTitle,
  btnLinkHref,
}: {
  title: string;
  message?: string;
  btnTitle: string;
  btnLinkHref: string;
}) {
  return (
    <div style={EmptyStyle}>
      <Typography sx={EmptyTitleStyle}>{title}</Typography>
      <Typography sx={EmptyMsgStyle}>{message}</Typography>
      <Link href={btnLinkHref}>
        <Btn label={btnTitle} />
      </Link>
    </div>
  );
}
