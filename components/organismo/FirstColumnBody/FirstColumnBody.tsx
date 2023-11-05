import * as React from "react";
import Box from "@mui/material/Box";
import NewInfo from "../../moleculas/NewInfo/NewInfo";
import ArticlePostsHome from "../../moleculas/ArticlePostsHome/ArticlePostsHome";

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
      <ArticlePostsHome />
    </Box>
  );
}
