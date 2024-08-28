import { createArticle } from "@/app/api/actions/articloAction";
import { getUserById } from "@/app/api/actions/userAction";
import ImagePicker from "@/components/moleculas/ImagePicker/ImagePicker";
import sessionCookie from "@/context/sessionCokie";
import { Checkbox, Modal } from "@mui/material";
import { User } from "@prisma/client";
import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
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

  const [user, setUser] = useState("");
  const [userInfos, setUserInfos] = useState<User>();
  

  useEffect(() => {
    const fetchUserPayload = async () => {
      const userPayload = await sessionCookie();
      if (!userPayload) return;
      const userInfos = await getUserById(userPayload?.sub);
      if (!userInfos) return;
      setUserInfos(userInfos);
      setUser(userPayload?.sub || "null");
    };

    fetchUserPayload();
  }, []);


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
    formData.append("authorId", user);
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
        <FormsAuthor onSubmit={handleAuthorDataChange}  autohorData={userInfos} />
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
