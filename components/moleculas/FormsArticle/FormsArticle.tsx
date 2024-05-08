import { useState } from "react";
import InputForms from "../../atomos/InputForms/InputForms";
import MagazineTitle from "../../atomos/MagazineTitle/MagazineTitle";
import PinkLine from "../../atomos/PinkLine/PinkLine";
import TitleReferences from "../../atomos/TitleReferences/TitleReferences";
import SubmissionText from "../SubmissionText/SubmissionText";
import style from "./formsArticle.module.css";

export default function FormsArticle() {
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
    <div className={style.containerForms}>
      <MagazineTitle title="Artigo" />
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
        <TitleReferences title="Corpo do artigo:" />

        <SubmissionText onChange={setArticle} />
      </div>
      <TitleReferences title="Referências no formato ABNT:" />
      <SubmissionText onChange={setRefs} />
    </div>
  );
}
