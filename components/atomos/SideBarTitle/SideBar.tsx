import React from "react";
import PersonIcon from "@mui/icons-material/Person";

interface SideBarProps {
  title: string;
}

export default function SideBar({ title }: SideBarProps) {
  return (
    <div
      style={{
        backgroundColor: "#F19800",
        height: "3rem",
        width: "100%",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1rem",
        fontWeight: 600,
      }}
    >
      {title}
      <PersonIcon htmlColor="#FFFFFF" />
    </div>
  );
}
