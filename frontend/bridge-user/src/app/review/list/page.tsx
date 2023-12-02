"use client";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import { CloseOutlined } from "@mui/icons-material";
import { AppBar, Dialog, IconButton, Toolbar, Typography } from "@mui/material";
import Modal from "@/components/templates/Modal";

export default function ReviewList() {
  const { modalState, openModal, closeModal } = useModal();

  const handleOpenModal = () => {
    openModal({
      title: "헬로우",
      content: <div>hello</div>
    });
  };

  return (
    <>
      <div>작성한 리뷰 리스트</div>
      <div
        onClick={handleOpenModal}
      >
        모달 버튼 클릭
      </div>
    </>
  );
}
