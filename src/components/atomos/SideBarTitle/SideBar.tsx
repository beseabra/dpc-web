'use client'
import ModalUpdateSideBar from "@/components/moleculas/ModalUpdateSideBar/ModalUpdateSideBar"
import PersonIcon from "@mui/icons-material/Person"
import { Button } from "@mui/material"
import { useState } from "react"

interface SideBarProps {
  title: string
  containerName?: string
}

export default function SideBar({ title, containerName }: SideBarProps) {
  const typeUser = "admin"
  const [modal, setModal] = useState(false)

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
      {typeUser === "admin" ? (
        <Button  
          endIcon={<PersonIcon htmlColor="var(--text-color-secondary)" />} 
          onClick={() => setModal(true)}
        />
      ) : (
        <PersonIcon
          htmlColor="var(--text-color-secondary)"
          fontSize="small"
          
        />
      )}

      <ModalUpdateSideBar modal={modal} setModal={setModal} label={containerName}  />  
    </div>
  )
}
