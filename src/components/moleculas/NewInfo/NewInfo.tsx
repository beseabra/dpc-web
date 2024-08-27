'use client';
import { getEventsByType } from "@/app/api/actions/sideBarInfosAction";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import ArticleDate from "../../atomos/ArticleDate/ArticleDate";
import ArticleDescription from "../../atomos/ArticleDescription/ArticleDescription";
import ArticleTitle from "../../atomos/ArticleTitle/ArticleTitle";
import ArticleImage from "../../atomos/ArticlesImage/ArticleImage";
import ButtonEdit from "../../atomos/ButtonEdit/ButtonEdit";
import { user } from "../../list/User/user";
import { CustomEvent } from "../../organismo/SecondColumnBody/SecondColumnBody";
import ModalUpdateSideBar from "../ModalUpdateSideBar/ModalUpdateSideBar";
import styles from "./newInfo.module.css";



export default function NewInfo() {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<CustomEvent[]>([]);
  const [modal, setModal] = useState(false);


  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      try {
        const events = await getEventsByType("novidade");
        setEvents(events);
       
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
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F2F2F2",
      }}
    >
      {events.map((event, index) => (
       
      <div key={index} className={styles.container} >
      <ArticleImage src={event.image} alt={event.image} />
      <Box
        style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem", width: "40rem" }}
      >
        <div className={styles.containerButtonEdit}>
          <ArticleDate date="Quarta-feira, 09 de Agosto 2023" />
          {user === "admin" &&  <ButtonEdit onClick={() => setModal(true)} />}
        </div>

        <ArticleTitle title={event.title}/>
        <ArticleDescription
          description={
           event.description
          }
        />
      </Box>
      </div>
      ))}

      <ModalUpdateSideBar modal={modal} setModal={setModal} label={"novidade"} />
    </Box>
  );
}
