"use client";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useState } from "react";
import ArticleDate from "../../atomos/ArticleDate/ArticleDate";
import ArticleTitle from "../../atomos/ArticleTitle/ArticleTitle";
import { images } from "../../list/carousel/carousel";
import styles from "./carousel.module.css";

export default function TextMobileStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    setActiveDot((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
    setActiveDot(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carouselImage}
        style={{ backgroundImage: `url(${images[activeStep].imgPath})` }}
      >
        <div className={styles.textContainer}>
          <ArticleTitle title={images[activeStep].title} />
          <ArticleDate date={images[activeStep].description} />
          <Link className={styles.textButton} href={images[activeStep].link}>
            {images[activeStep].buttonText}
          </Link>
        </div>
      </div>

      <div className={styles.navigationContainer}>
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          style={{ color: "#fff" }}
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
          style={{ color: "#fff" }}
        >
          Próximo
          {activeStep < maxSteps - 1 && <KeyboardArrowRight />}
        </Button>
      </div>
    </div>
  );
}
