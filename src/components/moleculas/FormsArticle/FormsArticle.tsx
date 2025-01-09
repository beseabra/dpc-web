import InputForms from "@/components/atomos/InputForms/InputForms";
import { Article } from "@prisma/client";
import { useState } from "react";
import MagazineTitle from "../../atomos/MagazineTitle/MagazineTitle";
import PinkLine from "../../atomos/PinkLine/PinkLine";
import TitleReferences from "../../atomos/TitleReferences/TitleReferences";
import SubmissionText from "../SubmissionText/SubmissionText";
import style from "./formsArticle.module.css";

interface IFormsArticle {
  onChange: (data: Partial<Article>) => void;
}

export default function FormsArticle({ onChange }: IFormsArticle) {
  const [infosForms, setInfosForms] = useState({
    title: "",
    subtitle: "",
    keywords: "",
    knowledgeArea: "",
    article: "",
    refs: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInfosForms((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      onChange({
        title: updatedData.title,
        subtitle: updatedData.subtitle,
        article: updatedData.article,
        keywords: updatedData.keywords.split(',').map(keyword => keyword.trim()),
        references: updatedData.refs.split(',').map(ref => ref.trim()),
      });

      return updatedData;
    });
  };

  const handleContentChange = (content: string) => {
    setInfosForms((prevData) => {
      const updatedData = { ...prevData, article: content };

      onChange({
        title: updatedData.title,
        subtitle: updatedData.subtitle,
        article: updatedData.article,
        keywords: updatedData.keywords.split(',').map(keyword => keyword.trim()),
        references: updatedData.refs.split(',').map(ref => ref.trim()),
      });

      return updatedData;
    });
  };

  return (
    <div className={style.containerForms}>
      <MagazineTitle title="Artigo" />
      <PinkLine />
      <div className={style.containerInput}>
        <InputForms
          label="Título"
          value={infosForms.title}
          name="title"
          onChange={handleChange}
          type="text"
        />
        <InputForms
          label="Subtítulo"
          value={infosForms.subtitle}
          name="subtitle"
          onChange={handleChange}
          type="text"
        />
        <InputForms
          label="Palavras-chave"
          value={infosForms.keywords}
          name="keywords"
          onChange={handleChange}
          type="text"
        />
        <InputForms
          label="Área de conhecimento"
          value={infosForms.knowledgeArea}
          name="knowledgeArea"
          onChange={handleChange}
          type="text"
        />
        <TitleReferences title="Corpo do artigo:" />
        <SubmissionText onChange={handleContentChange} />
        {infosForms.article && (
          <div dangerouslySetInnerHTML={{ __html: infosForms.article }}></div>
        )}
      </div>
      <TitleReferences title="Referências no formato ABNT:" />
      <SubmissionText onChange={handleContentChange} />
    </div>
  );
}
