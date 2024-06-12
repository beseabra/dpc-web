interface ButtonProps {
  text: string;
  onClick?: () => void;
  color: string;
  textColor?: string;
}

export default function Button({
  text,
  onClick,
  color,
  textColor,
}: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: color,
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "0.3rem",
        color: textColor ? "black" : "white",
        minWidth: "8rem",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
