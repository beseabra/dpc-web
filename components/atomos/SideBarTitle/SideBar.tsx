import PersonIcon from "@mui/icons-material/Person";

interface SideBarProps {
  title: string;
}

export default function SideBar({ title }: SideBarProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--secondary-color)",
        fontSize: "0.7rem",
        minHeight: "2rem",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        fontWeight: 600,
        flexWrap: "wrap",
        overflow: "auto",
        marginBottom: ".5rem",
      }}
    >
      {title}
      <PersonIcon htmlColor="var(--text-color-secondary)" fontSize="small" />
    </div>
  );
}
