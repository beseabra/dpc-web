"use client";
import { getEventsByType } from "@/app/api/actions/sideBarInfosAction";
import sessionCookie from "@/context/sessionCokie";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Button, CircularProgress, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import ArticleDate from "../../atomos/ArticleDate/ArticleDate";
import ArticleTitle from "../../atomos/ArticleTitle/ArticleTitle";
import ButtonEdit from "../../atomos/ButtonEdit/ButtonEdit";
import ModalUpdateSideBar from "../ModalUpdateSideBar/ModalUpdateSideBar";
import styles from "./carousel.module.css";

interface ImageData {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function TextMobileStepper() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<ImageData[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [events, userPayload] = await Promise.all([
          getEventsByType("carrossel"),
          sessionCookie(),
        ]);
        setImages(events);
        setUserType(userPayload?.type || "user");
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        alert("Erro ao buscar dados. Por favor, tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % images.length);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + images.length) % images.length);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <Typography variant="body1" color="textSecondary">
        Nenhuma imagem disponível.
      </Typography>
    );
  }

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carouselImage}
        style={{ backgroundImage: `url(${images[activeStep].image})` }}
      >
        <div className={styles.textContainer}>
          <div className={styles.editButtoncontainer}>
            <ArticleTitle title={images[activeStep].title} />
            {userType === "admin" && (
              <ButtonEdit onClick={() => setModalOpen(true)} />
            )}
          </div>
          <ArticleDate date={images[activeStep].description} />
          <Link className={styles.textButton} href={images[activeStep].link}>
            Saiba mais!
          </Link>
        </div>
      </div>

      <div className={styles.navigationContainer}>
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          style={{ color: "var(--text-color-secondary)" }}
        >
          {activeStep > 0 && <KeyboardArrowLeft />}
          Anterior
        </Button>
        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <span
              key={index}
              className={
                index === activeStep
                  ? `${styles.dot} ${styles.active}`
                  : styles.dot
              }
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === images.length - 1}
          style={{ color: "var(--text-color-secondary)" }}
        >
          Próximo
          {activeStep < images.length - 1 && <KeyboardArrowRight />}
        </Button>
      </div>

      <ModalUpdateSideBar modal={modalOpen} setModal={setModalOpen} label="carrossel" />
    </div>
  );
}
