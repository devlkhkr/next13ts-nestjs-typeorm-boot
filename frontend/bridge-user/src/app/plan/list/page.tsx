"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Btn from "@/components/atoms/Button";

export default function PlanList() {
  const apiCall = async () => {
    await fetch("/api/getData", {
      method: "GET",
    })
      .then((response) => response.json()) // JSON 형식으로 응답 내용을 파싱
      .then((data) => {
        console.log(data); // 실제 응답 데이터 출력
      });
  };
  return (
    <Typography variant="body1" gutterBottom>
      플랜 리스트
    </Typography>
  );
}
