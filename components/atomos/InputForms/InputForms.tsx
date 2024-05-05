import { TextField } from "@mui/material";

interface InputFormsProps {
  label: string;
  type: string;
  value?: string;
  name?: string;
  onChange?: (e: any) => void;
}

export default function InputForms({
  label,
  type,
  value,
  name,
  onChange,
}: InputFormsProps) {
  return (
    <TextField
      id="outlined-read-only-input"
      label={label}
      type={type}
      variant="filled"
      style={{ width: "100%", marginTop: "1rem" }}
      value={value}
      name={name}
      onChange={(e) => onChange && onChange(e)}
    />
  );
}
