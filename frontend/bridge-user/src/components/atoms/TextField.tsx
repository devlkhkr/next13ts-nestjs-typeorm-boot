import { TextField as TextFieldMUI } from "@mui/material";

const TextFieldStyle = {
  fontSize: 12,
};

export interface TextFieldProps {
  label: string;
  variant: "outlined" | "filled" | "standard";
}

const TextField = ({ label, variant }: TextFieldProps) => {
  return (
    <TextFieldMUI sx={TextFieldStyle} label={label} variant={variant} />
  );
}

export default TextField;