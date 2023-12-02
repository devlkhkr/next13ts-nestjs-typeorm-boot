import Button from "@mui/material/Button";
import { MouseEventHandler } from "react";

const ButtonStyle = {
  height: 32,
  color: "#fff",
  borderRadius: "26px",
  backgroundImage:
    "linear-gradient(90deg, #0065ff, #6942ef, #6554c0, #008cff, #0065ff, #6942ef)",
  backgroundSize: "400%",
  backgroundPosition: "0% 0%",
  padding: "0 30px",
  fontSize: 12,
};

export interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler;
}

const Btn = ({ label, onClick }: ButtonProps) => {
  return (
    <Button sx={ButtonStyle} onClick={onClick}>
      {label}
    </Button>
  );
};

export default Btn;
