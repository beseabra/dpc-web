import * as React from "react";
import Box from "@mui/material/Box";
import FirstColumn from "../../moleculas/FirstColumnBody/FirstColumnBody";
import SecondColumn from "../../moleculas/SecondColumnBody/SecondColumnBody";

export default function RecentNews() {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        margin: "1rem 6rem 0 6rem",
      }}
    >
      <FirstColumn />
      <SecondColumn />
    </Box>
  );
}
