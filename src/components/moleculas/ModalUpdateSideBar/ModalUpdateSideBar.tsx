'use client';
import { createSideBarInfo, getEventsByType, updateSideBarInfo } from "@/app/api/actions/sideBarInfos";
import Button from "@/components/atomos/button/Button";
import InputForms from "@/components/atomos/InputForms/InputForms";
import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ImagePicker from "../ImagePicker/ImagePicker";
import styles from "./ModalUpdateSideBar.module.css";

export interface Forms {
  id?: string;
  title: string;
  description: string;
  link: string;
  image: string | null;
  type: string;
}

interface ModalUpdateSideBarProps {
  modal: boolean;
  setModal: (modal: boolean) => void;
  label?: string;
}

export default function ModalUpdateSideBar({ modal, setModal, label }: ModalUpdateSideBarProps) {
  const [infoSideBars, setInfoSideBars] = useState<Forms[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      if (label) {
        setLoading(true);
        try {
          const events = await getEventsByType(label);
          if (events.length > 0) {
            setInfoSideBars(events);
          }
        } catch (error) {
          console.error("Erro ao buscar eventos:", error);
          alert("Erro ao buscar eventos. Por favor, tente novamente.");
        } finally {
          setLoading(false);
        }
      }
    }

    fetchEvents();
  }, [label]);

  const handleImageUpload = (url: string, index: number) => {
    setInfoSideBars((prev) =>
      prev.map((info, i) => (i === index ? { ...info, image: url } : info))
    );
  };

  const handleChange = (index: number, field: keyof Forms, value: string) => {
    setInfoSideBars((prev) =>
      prev.map((info, i) => (i === index ? { ...info, [field]: value } : info))
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const promises = infoSideBars.map((infoSideBar) => {
        const formData = new FormData();
        formData.append("title", infoSideBar.title);
        formData.append("description", infoSideBar.description);
        formData.append("link", infoSideBar.link);
        formData.append("image", infoSideBar.image ?? "");
        formData.append("type", infoSideBar.type);

        if (infoSideBar.id) {
          return updateSideBarInfo(infoSideBar.id, formData);
        } else {
          return createSideBarInfo(formData);
        }
      });

      await Promise.all(promises);
      setModal(false);
    } catch (error) {
      console.error("Ocorreu um erro ao salvar as informações:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={modal}
      onClose={() => setModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={styles.container}
    >
      <Box className={styles.modalContainer}>
        <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.title}>
          Editar {label}
        </Typography>
        <form onSubmit={handleSubmit} className={styles.forms}>
          

          {infoSideBars.map((infoSideBar, index) => (
            <div key={index}>
              <Typography variant="h6" component="h2" className={styles.subtitle}>
                Imagem {index + 1}
              </Typography>
              <ImagePicker
                id={`event-${label}`}
                name={`event-${label}`}
                label={`event-${label}`}
                onImageUpload={(url) => handleImageUpload(url, index)}
                bucketRoute="public/events/"
              />
              <InputForms
                label="title"
                type="text"
                id={`title-${index}`}
                value={infoSideBar.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
              />
              <InputForms
                label="description"
                type="text"
                id={`description-${index}`}
                value={infoSideBar.description}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
              />
              <InputForms
                label="link"
                type="text"
                id={`link-${index}`}
                value={infoSideBar.link}
                onChange={(e) => handleChange(index, 'link', e.target.value)}
              />
            </div>
          ))}
          
          <Button text= {loading ? "Salvando..." : "Salvar"} color={"var(--quaternary-color)"} type={"submit"} ></Button>
          {loading && (
            <div className={styles.loading}>
              <CircularProgress />
            </div>
          )}
        </form>
      </Box> 
    </Modal>
  );
}
