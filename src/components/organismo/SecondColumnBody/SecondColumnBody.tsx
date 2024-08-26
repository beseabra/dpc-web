"use client";
import { getEventsByType } from "@/app/api/actions/sideBarInfos";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Evaluation from "../../atomos/Evaluation/Evaluation";
import SideBarInfos from "../../atomos/SideBarInfos/SideBarInfos";
import SideBar from "../../atomos/SideBarTitle/SideBar";

export type CustomEvent = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
};


export default function SecondColumn() {

  const [loading, setLoading] = useState(false);
  const [eventsInstagram, setEventsInstagram] = useState< CustomEvent[]>([]);
  const [eventsEventos, setEventsEventos] = useState< CustomEvent[]>([]);

  console.log(eventsInstagram);
  console.log(eventsEventos);
  


  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      try {
        const eventInsta = await getEventsByType("instagram");
        setEventsInstagram(eventInsta);

        const eventEventos = await getEventsByType("evento");
        setEventsEventos(eventEventos);


      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
        alert("Erro ao buscar eventos. Por favor, tente novamente.");
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);



  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <SideBar title="NOSSO INSTAGRAM" containerName="instagram"/>
      {loading && <CircularProgress />}
      <SideBarInfos infoslist={eventsInstagram}  />
      <Box style={{ height: "1rem" }} />
      <SideBar title="EVENTOS" containerName="evento"/>
      {loading && <CircularProgress />}
      <SideBarInfos infoslist={eventsEventos} />
      <Box style={{ height: "1rem" }} />
      <SideBar title="AVALIE O CONTEÚDO" />
      <Evaluation />
    </div>
  );
}
