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
    author: {},
    article: {
      title: "",
      subtitle: "",
      keywords: "",
      knowledgeArea: "",
    },
  });

  console.log(submissionData);

  const handlePrintPdf = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (!checked) {
      alert("Por favor, marque a caixa de seleção antes de submeter.");
      return;
    }
    alert("Formulário submetido com sucesso!");
  };

  return (
    <>
      <FormsAuthor
        onSubmit={(authorData: any) =>
          setSubmissionData({ ...submissionData, author: authorData })
        }
      />
      <FormsArticle
        onChange={(articleData) =>
          setSubmissionData({ ...submissionData, article: articleData })
        }
      />
      <div className={style.containerCheck}>
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p>
          Li e concordo com os{" "}
          <b>
            <i>
              <u>termos e regras de submissão</u>
            </i>
          </b>
        </p>
      </div>
      <div className={style.containerButtons}>
        <Button
          text="Gerar PDF"
          color="var(--quinary-color)"
          textColor="black"
          onClick={handlePrintPdf}
        />
        <Button
          text="Visualizar"
          color="var(--tertiary-color)"
          onClick={handlePrintPdf}
        />
        <Button
          text="Submeter"
          color="var(--secondary-color)"
          onClick={handleSubmit}
        />
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
