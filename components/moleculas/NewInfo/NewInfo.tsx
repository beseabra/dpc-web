import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import ArticleTitle from "../../atomos/ArticleTitle/ArticleTitle";
import ArticleDescription from "../../atomos/ArticleDescription/ArticleDescription";

export default function NewInfo() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F2F2F2",
      }}
    >
      <Image
        src="/ps.png"
        width={350}
        height={230}
        alt="Picture of the author"
      />
      <Box style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
        <p style={{ fontSize: 12 }}>
          <i> Quarta-feira, 09 de Agosto 2023</i>{" "}
        </p>
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
