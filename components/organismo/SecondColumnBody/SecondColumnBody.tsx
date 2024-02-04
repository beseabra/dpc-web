import Box from "@mui/material/Box";
import Evaluation from "../../atomos/Evaluation/Evaluation";
import SideBarInfos from "../../atomos/SideBarInfos/SideBarInfos";
import SideBar from "../../atomos/SideBarTitle/SideBar";
import {
  nossoInstagram,
  nossosEventos,
} from "../../list/homePostsSecondColumn/homePostsSecondColumn";

export default function SecondColumn() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
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
    </div>
  );
}
