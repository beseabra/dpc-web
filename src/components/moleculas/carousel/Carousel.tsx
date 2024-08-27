"use client";
import { getEventsByType } from "@/app/api/actions/sideBarInfosAction";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Button, CircularProgress, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import ArticleDate from "../../atomos/ArticleDate/ArticleDate";
import ArticleTitle from "../../atomos/ArticleTitle/ArticleTitle";
import ButtonEdit from "../../atomos/ButtonEdit/ButtonEdit";
import { user } from "../../list/User/user";
import ModalUpdateSideBar from "../ModalUpdateSideBar/ModalUpdateSideBar";
import styles from "./carousel.module.css";

interface ImageData {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function TextMobileStepper() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<ImageData[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      try {
        const events = await getEventsByType("carrossel");
        setImages(events);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
        alert("Erro ao buscar eventos. Por favor, tente novamente.");
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    setActiveDot((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    setActiveDot((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={styles.carouselContainer}>
      {images.length > 0 ? (
        <>
          <div
            className={styles.carouselImage}
            style={{ backgroundImage: `url(${images[activeStep].image})` }}
          >
            <div className={styles.textContainer}>
              <div className={styles.editButtoncontainer}>
                <ArticleTitle title={images[activeStep].title} />
                {user === "admin" && (
                  <ButtonEdit onClick={() => setModal(true)} />
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
                    index === activeDot
                      ? `${styles.dot} ${styles.active}`
                      : styles.dot
                  }
                  onClick={() => {
                    setActiveStep(index);
                    setActiveDot(index);
                  }}
                ></span>
              ))}
            </div>
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              style={{ color: "var(--text-color-secondary)" }}
            >
              Próximo
              {activeStep < maxSteps - 1 && <KeyboardArrowRight />}
            </Button>
          </div>
        </>
      ) : (
        <Typography variant="body1" color="textSecondary">
          Nenhuma imagem disponível.
        </Typography>
      )}

      <ModalUpdateSideBar modal={modal} setModal={setModal} label={"carrossel"} />
    </div>
  );
}
