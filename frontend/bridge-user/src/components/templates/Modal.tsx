"use client";
import { useModal } from "@/hooks/useModal";
import { CloseOutlined } from "@mui/icons-material";
import { AppBar, Dialog, IconButton, Toolbar, Typography } from "@mui/material";

export default function Modal() {
  const { modalState, closeModal } = useModal();
  
  return (
    <>
      <Dialog fullScreen open={modalState.isOpen} onClose={closeModal}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ flex: 1 }} variant="h6" component="div">
              {modalState.title}
            </Typography>
            <IconButton
            edge="start"
              color="inherit"
              onClick={closeModal}
              aria-label="close"
            >
              <CloseOutlined />
            </IconButton>
          </Toolbar>
        </AppBar>
        {modalState.content}
      </Dialog>
    </>
  );
}
