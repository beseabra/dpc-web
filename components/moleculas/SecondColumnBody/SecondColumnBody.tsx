import * as React from "react";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";

export default function SecondColumn() {
  return (
    <Box
      style={{
        display: "flex",

        flexDirection: "column",
        marginRight: "1rem ",
      }}
    >
      <div
        style={{
          backgroundColor: "#F19800",
          height: "3rem",
          width: "100%",
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
          padding: "0 0.51rem",
        }}
      >
        Title
        <PersonIcon htmlColor="#FFFFFF" />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Image
          src="/ig.png"
          alt="Picture of the author"
          width={150}
          height={120}
          style={{ backgroundColor: "red", marginTop: "1rem" }}
        />
        <div style={{ padding: "1rem" }}>
          <h1 style={{ fontSize: 18, height: "0.2rem" }}>Text</h1>
          <h6 style={{ fontWeight: 500, margin: "0.5rem 0" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            laborum neque explicabo. Earum repellat quaerat minima
          </h6>
        </div>
      </div>
    </Box>
  );
}
