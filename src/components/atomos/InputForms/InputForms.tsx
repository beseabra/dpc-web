import { TextField } from "@mui/material";

interface InputFormsProps {
  id?: string;
  label: string;
  type: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputForms({
  id,
  label,
  type,
  value,
  name,
  onChange,
}: InputFormsProps) {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      variant="filled"
      style={{
        width: "100%",
        marginTop: "1rem",
      }}
      name={name}
      onChange={onChange}
    />
  );
}
