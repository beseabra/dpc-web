import { TextField } from "@mui/material";

interface InputFormsProps {
  id?: string;
  label: string;
  type: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  error?: boolean;
  helperText?: string;
}

export default function InputForms({
  id,
  label,
  type,
  value,
  name,
  onChange,
  disabled,
  required = false,
  autoComplete = "off",
  error = false,
  helperText = "",
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
      value={value}
      disabled={disabled}
      required={required}
      autoComplete={autoComplete}
      error={error}
      helperText={helperText}
      onClick={(e) => e.stopPropagation()} 
    />
  );
}