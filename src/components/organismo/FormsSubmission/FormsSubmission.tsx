import { createArticle } from "@/app/api/actions/articloAction";
import ImagePicker from "@/components/moleculas/ImagePicker/ImagePicker";
import { Checkbox, Modal } from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import Button from "../../atomos/button/Button";
import FormsArticle from "../../moleculas/FormsArticle/FormsArticle";
import FormsAuthor from "../../moleculas/FormsAuthor/FormsAuthor";
import PdfDocument from "../../moleculas/PdfDocument/PdfDocument";
import style from "./formsSubmission.module.css";

export default function FormsSubmission() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [submissionData, setSubmissionData] = useState({
    author: { name: "", lastName: "", email: "", phone: "", institution: "", lattes: "", graduation: "", photo: "" },
    coAuthor: { name: "", lastName: "", email: "", phone: "", institution: "", lattes: "", graduation: "", photo: "" },
    article: { title: "", subtitle: "", keywords: "", knowledgeArea: "", article: "" },
  });
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  const handleImageUpload = (url: string) => {
    setProfileImageUrl(url);
  };

  const handlePrintPdf = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleAuthorDataChange = (updatedAuthorData: any) => {
    setSubmissionData((prevData) => ({
      ...prevData,
      author: updatedAuthorData,
    }));
  };

  const handleCoAuthorDataChange = (updatedCoAuthorData: any) => {
    setSubmissionData((prevData) => ({
      ...prevData,
      coAuthor: updatedCoAuthorData,
    }));
  };

  const handleArticleDataChange = (updatedArticleData: any) => {
    setSubmissionData((prevData) => ({
      ...prevData,
      article: updatedArticleData,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    if (!checked) {
      alert("Por favor, marque a caixa de seleção antes de submeter.");
      return;
    }

    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("title", submissionData.article.title);
    formData.append("subtitle", submissionData.article.subtitle);
    formData.append("article", submissionData.article.article);
    formData.append("keywords", submissionData.article.keywords);
    formData.append("authorId", "96593c0c-ed7f-44a7-a128-e481011f1697");
    formData.append("keywords", JSON.stringify(["keyword 1", "keyword 2"]));
    formData.append("coAuthors", JSON.stringify([submissionData.coAuthor]));
    if (profileImageUrl) {
      formData.append("image", profileImageUrl);
    }
    await createArticle(formData);
    alert("Formulário submetido com sucesso!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormsAuthor onSubmit={handleAuthorDataChange} />
        <FormsAuthor onSubmit={handleCoAuthorDataChange} isCoAuthor />
        <FormsArticle onChange={handleArticleDataChange} />
        <ImagePicker id="bannerImages" name="bannerImages" label="bannerImages" onImageUpload={handleImageUpload} bucketRoute="public/bannerImages/" />
        <div className={style.containerCheck}>
          <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
          <p>
            Li e concordo com os{" "}
            <b>
              <i>
                <u>termos e regras de submissão</u>
              </i>
            </b>
          </p>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <div className={style.containerButtons}>
        <Button text="Gerar PDF" color="var(--quinary-color)" textColor="black" onClick={handlePrintPdf} />
        <Button text="Visualizar" color="var(--tertiary-color)" onClick={handlePrintPdf} />
        <Button text="Submeter" color="var(--secondary-color)" />
        <Modal
          open={open}
          onClose={handleCloseModal}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={style.pdfContainer}>
            <PDFViewer width="100%" height="100%">
              <PdfDocument article={submissionData.article} />
            </PDFViewer>
          </div>
        </Modal>
      </div>
    </>
  );
}
