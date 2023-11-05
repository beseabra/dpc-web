"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "./carousel.module.css";
import { useState } from "react";

const images = [
  {
    imgPath:
      "https://img.freepik.com/fotos-gratis/ceu-estrelado_1048-11828.jpg?w=900&t=st=1699056358~exp=1699056958~hmac=b4676ac22387cebf60bac1c2440c7e8dea3a27e1dc96e9f698333c2a0dfb8001",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci alias, fugit sint, rerum totam commodi temporibus neque unde praesentium minus, voluptatem qui assumenda quidem reiciendis illum doloremque amet placeat voluptas.",
  },
  {
    imgPath:
      "https://revistadigital.com.br/wp-content/uploads/2023/03/Qual-a-maior-galaxia-do-universo-860x487.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci alias, fugit sint, rerum totam commodi temporibus neque unde praesentium minus, voluptatem qui assumenda quidem reiciendis illum doloremque amet placeat voluptas.",
  },
  {
    imgPath:
      "https://i.pinimg.com/originals/ae/c2/de/aec2de91ea0646eaa38b52fe700d6d3c.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

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
        {images[activeStep].description}
      </div>

      <div className={styles.navigationContainer}>
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          style={{ color: "#fff" }}
        >
          {activeStep > 0 && <KeyboardArrowLeft />}
          Back
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
          Next
          {activeStep < maxSteps - 1 && <KeyboardArrowRight />}
        </Button>
      </div>
    </div>
  );
}
