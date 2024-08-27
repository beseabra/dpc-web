"use client";
import ButtonEdit from "@/components/atomos/ButtonEdit/ButtonEdit";
import { user } from "@/components/list/User/user";
import ModalMemberAdd from "@/components/moleculas/ModalMemberAdd/ModalMemberAdd";
import Image from "next/image";
import { useState } from "react";
import MagazineTitle from "../../components/atomos/MagazineTitle/MagazineTitle";
import MemberProject from "../../components/atomos/MemberProject/Member";
import styles from "./page.module.css";


export default function Project() {
  const [modal, setModal] = useState(false);
  

  return (
    <main>
      <div className={styles.container}>
        <div>
          <MagazineTitle title="Quem somos?" />
          <p className={styles.justify}>
            O Despertar para a Ciência é um projeto de extensão da UTFPR-CP
            dedicado a fomentar o interesse pela ciência em pessoas de todas as
            idades. Buscamos desmistificar a ciência, tornando-a acessível e
            empolgante. Nossa missão inclui instigar a paixão pela ciência,
            especialmente entre jovens e adultos, e inspirar os jovens a
            considerar carreiras científicas. Compartilhamos informações
            científicas de maneira simples e envolvente em nossas redes sociais,
            realizamos atividades práticas em escolas e eventos públicos, e
            desenvolvemos jogos interativos, como o Bingo Consciência e o Passa
            ou repassa, para estimular a curiosidade. O Projet é uma jornada
            emocionante em direção à descoberta e ao aprendizado, com a missão
            de instigar um futuro mais iluminado pela ciência. Junte-se a nós
            nessa busca pelo conhecimento científico e na inspiração da próxima
            geração de cientistas.
          </p>
        </div>
        <MagazineTitle title="Objetivo, missão, visão e valores" />
        <div className={styles.apresentation}>
          <Image
            src={"/alvo.png"}
            alt={"luneta"}
            width={140}
            height={125}
            objectFit="cover"
            style={{ borderRadius: "50%" }}
          />
          <div className={styles.containerApresentation}>
            <b>Objetivo</b> Nosso projeto visa despertar o interesse das pessoas
            pela ciência. Através de ações de extensão, promovemos a divulgação
            científica de maneira gratuita, acessível e simples. Além disso, o
            projeto também oferece um ambiente propício para o desenvolvimento
            da nossa equipe.
          </div>
        </div>
        <div className={styles.apresentation}>
          <Image
            src={"/montanha.png"}
            alt={"luneta"}
            width={140}
            height={125}
            objectFit="cover"
            style={{ borderRadius: "50%" }}
          />
          <div className={styles.containerApresentation}>
            <b>Missão</b> No Despertar para a Ciência, temos o compromisso de
            promover ações educativas e de divulgação científica para os
            estudantes da educação básica e, adicionalmente usuários de redes
            sociais interessados em consumir e compartilhar informações
            científicas simples, acessíveis e de qualidade.
          </div>
        </div>
        <div className={styles.apresentation}>
          <Image
            src={"/luneta.png"}
            alt={"luneta"}
            width={140}
            height={125}
            objectFit="cover"
            style={{ borderRadius: "50%" }}
          />
          <div className={styles.containerApresentation}>
            <b>Visão</b> Nosso projeto visa despertar o interesse das pessoas
            pela ciência. Através de ações de extensão, promovemos a divulgação
            científica de maneira gratuita, acessível e simples. Além disso, o
            projeto também oferece um ambiente propício para o desenvolvimento
            da nossa equipe.
          </div>
        </div>
        <div className={styles.apresentation}>
          <Image
            src={"/maos.png"}
            alt={"luneta"}
            width={140}
            height={125}
            objectFit="cover"
            style={{ borderRadius: "50%" }}
          />
          <div className={styles.containerApresentation}>
            <b>Valores</b>Agir com respeito à diversidade, ética, honestidade e
            transparência; Trabalho em equipe; Compromisso com a ciência e a
            educação; Valorização dos membros da equipe; Disponibilizar
            informações de forma simples, acessível e atrativa; Promover
            oportunidades de aprendizagem para todos; Sentimento de dono
          </div>
        </div>
        <div className={styles.containerTitle}>
          <MagazineTitle title="Nosso time" />
          {user === "admin" && (
            <ButtonEdit onClick={() => setModal(true)} />
          )}
        </div>
      </div>
      <MemberProject />
      <ModalMemberAdd modal={modal} setModal={setModal} />
    </main>
  );
}
