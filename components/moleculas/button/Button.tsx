interface ButtonProps {
  text: string;
  onClick?: () => void;
  color: string;
}

export default function Button({ text, onClick, color }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: color,
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "0.3rem",
        color: "white",
        minWidth: "8rem",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
