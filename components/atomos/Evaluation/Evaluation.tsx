import React from "react";
import { Box, Rating } from "@mui/material";

export default function CustomizedRatings() {
  return (
    <div>
      <Box
        component="fieldset"
        mb={3}
        width={"96%"}
        borderColor="transparent"
        display={"flex"}
        justifyContent={"center"}
      >
        <Rating name="customized-empty" defaultValue={4} precision={0.5} />
      </Box>
    </div>
  );
}
