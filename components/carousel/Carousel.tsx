"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "./carousel.module.css";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://media.istockphoto.com/id/1035676256/pt/foto/background-of-galaxy-and-stars.jpg?s=612x612&w=0&k=20&c=Dpi4np5MHfIYriR9JDQXqpBAMMt7NV1jnOKuc0hqo1w=",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci alias, fugit sint, rerum totam commodi temporibus neque unde praesentium minus, voluptatem qui assumenda quidem reiciendis illum doloremque amet placeat voluptas.",
  },
  {
    label: "Bird",
    imgPath:
      "https://revistadigital.com.br/wp-content/uploads/2023/03/Qual-a-maior-galaxia-do-universo-860x487.webp",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://i.pinimg.com/originals/ae/c2/de/aec2de91ea0646eaa38b52fe700d6d3c.jpg",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps); // Loop para a primeira imagem após a última.
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    ); // Loop para a última imagem após a primeira.
  };

  return (
    <Box
      sx={{ flexGrow: 1, marginLeft: 13, marginRight: 13 }}
      className={styles.carousel}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <Box
        sx={{
          height: 350,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        style={{
          backgroundImage: `url(${images[activeStep].imgPath})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {images[activeStep].description}
        <Box
          component="img"
          sx={{
            overflow: "hidden",
            backgroundSize: "contain",
            width: "85%",
          }}
          alt={images[activeStep].label}
        />

        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          style={{
            width: "100%",
            color: "white",
            backgroundColor: "#9b9b9b",
            maxHeight: "10px",
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
              style={{ color: "#fff" }}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              style={{ color: "#fff" }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
}
