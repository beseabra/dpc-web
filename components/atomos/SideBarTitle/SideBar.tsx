import PersonIcon from "@mui/icons-material/Person";

interface SideBarProps {
  title: string;
}

export default function SideBar({ title }: SideBarProps) {
  return (
    <div
      style={{
        backgroundColor: "#F19800",
        fontSize: "0.8rem",
        minHeight: "3rem",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        fontWeight: 600,
        flexWrap: "wrap",
        overflow: "auto",
      }}
    >
      {title}
      <PersonIcon htmlColor="#FFFFFF" />
    </div>
  );
}
