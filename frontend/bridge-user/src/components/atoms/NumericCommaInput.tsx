import { InputBaseComponentProps } from "@mui/material";
import { forwardRef } from "react";
import { NumericFormat } from "react-number-format";

export const NumericInputProps: InputBaseComponentProps = {
  inputMode: "numeric",
  pattern: "[0-9]*",
};

export const NumberCommaInput = forwardRef<HTMLInputElement>(
  function NumberCommaInput(props, ref) {
    const { ...other } = props;
    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        thousandSeparator
        valueIsNumericString
      />
    );
  }
);
