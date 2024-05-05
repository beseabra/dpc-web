"use client";
import { useState } from "react";
import InputForms from "../../../components/atomos/InputForms/InputForms";
import PinkLine from "../../../components/atomos/PinkLine/PinkLine";
import TitleReferences from "../../../components/atomos/TitleReferences/TitleReferences";
import Footer from "../../../components/moleculas/Footer/Footer";
import Header from "../../../components/moleculas/Header/Header";
import SubmissionText from "../../../components/moleculas/SubmissionText/SubmissionText";
import style from "./page.module.css";

export default function Submission() {
  const [article, setArticle] = useState("");
  const [refs, setRefs] = useState("");
  const [infosForms, setInfosForms] = useState({
    title: "",
    subtitle: "",
    keywords: "",
    knowledgeArea: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setInfosForms({ ...infosForms, [name]: value });
  };

  console.log(infosForms);

  return (
    <div>
      <Header />
      <h1>Formulário de submissão</h1>
      <p>
        Preenha o formuário abaixo atentatemente, uma vez enviados, não é
        possíve realizar edições ou exclusão das informações enviadas.
      </p>
      <div className={style.container}>
        <h1>Autor</h1>
        <button>+</button>
      </div>
      <PinkLine />
      <div className={style.container}>
        <h1>Artigo</h1>
      </div>
      <PinkLine />
      <div className={style.containerInput}>
        <InputForms
          label="Título"
          type=""
          value={infosForms.title}
          name="title"
          onChange={handleChange}
        />
        <InputForms
          label="Subtítulo"
          type=""
          value={infosForms.subtitle}
          name="subtitle"
          onChange={handleChange}
        />
        <InputForms
          label="Palavras-chave"
          type=""
          value={infosForms.keywords}
          name="keywords"
          onChange={handleChange}
        />
        <InputForms
          label="Área de conhecimento"
          type=""
          value={infosForms.knowledgeArea}
          name="knowledgeArea"
          onChange={handleChange}
        />
        <SubmissionText onChange={setArticle} />
      </div>
      <TitleReferences />
      <SubmissionText onChange={setRefs} />
      {article && (
        <div>
          <div dangerouslySetInnerHTML={{ __html: article }}></div>
        </div>
      )}
      {refs && (
        <div>
          <div dangerouslySetInnerHTML={{ __html: refs }}></div>
        </div>
      )}
      <Footer />
    </div>
  );
}
