import * as React from "react";
import Box from "@mui/material/Box";
import SideBar from "../../atomos/SideBarTitle/SideBar";
import SideBarInfos from "../../atomos/SideBarInfos/SideBarInfos";
import Evaluation from "../../atomos/Evaluation/Evaluation";

const nossoInstagram = [
  {
    imgPath: "/ig.png",
    title: "titulo",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci alias, fugit sint, rerum totam commodi  ",
    link: "https://www.instagram.com/despertarparaaciencia.utfpr",
  },
  {
    imgPath: "/carousel1.jpg",
    title: "titulo",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci alias, fugit sint, rerum totam commodi temporibus neque unde ",
    link: "https://www.instagram.com/despertarparaaciencia.utfpr",
  },
  {
    imgPath: "/carousel2.jfif",
    title: "titulo",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    link: "https://www.instagram.com/despertarparaaciencia.utfpr",
  },
];
const nossosEventos = [
  {
    imgPath: "/ig.png",
    title: "titulo",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci alias, fugit sint, rerum totam commodi  ",
    link: "https://www.instagram.com/despertarparaaciencia.utfpr",
  },
  {
    imgPath: "/carousel1.jpg",
    title: "titulo",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci alias, fugit sint, rerum totam commodi temporibus neque unde ",
    link: "https://www.instagram.com/despertarparaaciencia.utfpr",
  },
  {
    imgPath: "/carousel2.jfif",
    title: "titulo",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    link: "https://www.instagram.com/despertarparaaciencia.utfpr",
  },
];

export default function SecondColumn() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        marginRight: "1rem ",
      }}
    >
      <SideBar title="NOSSO INSTAGRAM" />
      <SideBarInfos infoslist={nossoInstagram} />
      <Box style={{ height: "1rem" }} />
      <SideBar title="EVENTOS" />
      <SideBarInfos infoslist={nossosEventos} />
      <Box style={{ height: "1rem" }} />
      <SideBar title="AVALIE NOSSO CONTEÚDO" />
      <Evaluation />
    </Box>
  );
}
