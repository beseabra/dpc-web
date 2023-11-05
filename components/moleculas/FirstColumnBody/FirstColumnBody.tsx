import * as React from "react";
import Box from "@mui/material/Box";
import NewInfo from "../NewInfo/NewInfo";

export default function FirstColumn() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "1rem",
      }}
    >
      <NewInfo />
      <div style={{ width: "1rem" }}>asda</div>
    </Box>
  );
}
