"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "./carousel.module.css";

const images = [
  {
    imgPath:
      "https://media.istockphoto.com/id/1035676256/pt/foto/background-of-galaxy-and-stars.jpg?s=612x612&w=0&k=20&c=Dpi4np5MHfIYriR9JDQXqpBAMMt7NV1jnOKuc0hqo1w=",
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
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeDot, setActiveDot] = React.useState(0);
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
    <Box
      sx={{ flexGrow: 1, marginLeft: 13, marginRight: 13, marginTop: 2 }}
      className={styles.carousel}
    >
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
          color: "#fff",
        }}
      >
        {images[activeStep].description}
      </Box>
      <div style={{}}>
        {images.map((_, index) => (
          <span
            key={index}
            className={index === activeDot ? "dot active" : "dot"}
            onClick={() => {
              setActiveStep(index);
              setActiveDot(index);
            }}
          ></span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "gray",
          width: "100%",
          height: 50,
        }}
      >
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          style={{ color: "#fff" }}
        >
          {activeStep > 0 && <KeyboardArrowLeft />}
          Back
        </Button>
        <Box
          style={{
            display: "flex",
            width: 150,
            height: 40,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {images.map((_, index) => (
            <div
              key={index}
              style={{
                height: 10,
                width: 10,
                borderRadius: "50%",
                backgroundColor: "#E5E5E5",
                border: index === activeDot ? "4px solid" : "none",
                borderColor: index === activeDot ? "#605D5D" : "#E5E5E5",
              }}
            />
          ))}
        </Box>
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
    </Box>
  );
}
