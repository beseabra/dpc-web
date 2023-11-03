import * as React from "react";
import Box from "@mui/material/Box";
import NewInfo from "../NewInfo/NewInfo";

export default function FirstColumn() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        paddingRight: "1rem",
      }}
    >
      <NewInfo />
    </Box>
  );
}
