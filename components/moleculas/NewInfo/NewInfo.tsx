import * as React from "react";
import Box from "@mui/material/Box";
import ArticleTitle from "../../atomos/ArticleTitle/ArticleTitle";
import ArticleDescription from "../../atomos/ArticleDescription/ArticleDescription";
import ArticleImage from "../../atomos/ArticlesImage/ArticleImage";
import ArticleDate from "../../atomos/ArticleDate/ArticleDate";

const image = { src: "/ps.png", alt: "Picture of the author" };

export default function NewInfo() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F2F2F2",
      }}
    >
      <ArticleImage src={image.src} alt={image.alt} />
      <Box style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
        <ArticleDate date="Quarta-feira, 09 de Agosto 2023" />
        <ArticleTitle title="Processo seletivo aberto!" />
        <ArticleDescription
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore eum omnis vero dolore reiciendis, quidem sed consequuntur et, nisi ducimus recusandae quisquam ab doloribus ad natus velit pariatur. Iusto."
          }
        />
      </Box>
    </Box>
  );
}
