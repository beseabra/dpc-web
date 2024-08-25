'use client'
import InputForms from "@/components/atomos/InputForms/InputForms";
import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import ImagePicker from "../ImagePicker/ImagePicker";
import styles from "./ModalUpdateSideBar.module.css";

interface ModalUpdateSideBarProps {
    modal: boolean;
    setModal: (modal: boolean) => void;
    label: string;
}

export default function ModalUpdateSideBar({ modal, setModal, label }: ModalUpdateSideBarProps) {

    const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null );
    const handleImageUpload = (url: string) => {
        setProfileImageUrl(url);
      };

    return (
        <>
        <Modal
         open={modal}
         onClose={() => setModal(false)}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
        >
         <Box className={styles.modalContainer}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar {label}
          </Typography>
          <ImagePicker
             id="profileImage"
             name="profileImage"
             label="Foto de Perfil"
             onImageUpload={handleImageUpload}
             bucketRoute="public/"
          />
          <InputForms label="title" type="text"/>
          <InputForms label="decription" type="text"/>
          <InputForms label="link" type="text"/>

        </Box>
      </Modal>
      </>
    );
}