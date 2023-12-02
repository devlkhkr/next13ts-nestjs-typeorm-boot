"use client";

import { BlurOn } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";

export default function SectionTitle(props: { label: string }) {
  return (
    <Divider textAlign="center">
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <BlurOn color="primary" />
        <span>{props.label}</span>
      </div>
    </Divider>
  );
}
