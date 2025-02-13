import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import { Alert, Box } from "@mui/material";
import { useRef, useState } from "react";
import Styles from "./howToCite.module.css";

export default function ArtigoReference() {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    return `${day}/${month}/${year}`;
  };

  // Exemplo de referência ABNT (descomente e substitua pelos dados reais)
  //  const abntReference = `${reference?.article.author.toUpperCase()}; ${reference?.author.coAuthor.toUpperCase()}. ${
  //  reference?.title
  //}. ${reference?.writer}. ${reference?.date}. ${reference?.area}, v. ${
  //  reference?.volume
  //}, n. ${reference?.number}, ${reference?.year}. ${
  // reference?.version
  //}. Disponível em: ${currentUrl}. Acesso em: ${getCurrentDate()}.`;
  const abntReference = `AUTOR. Título do artigo. Nome da revista, v. 1, n. 1, p. 1-10, 2024. Disponível em: ${currentUrl}. Acesso em: ${getCurrentDate()}.`;

  const [isCopied, setIsCopied] = useState(false);
  const textToCopyRef = useRef<HTMLParagraphElement>(null);

  const handleCopyClick = () => {
    if (textToCopyRef.current) {
      navigator.clipboard.writeText(textToCopyRef.current.innerText);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <>
      <Box className={Styles.containerReferences}>
        <div className={Styles.containerIcon} onClick={handleCopyClick}>
          <h3>Como Citar?</h3>
          <div className={Styles.button}>
            <CopyAllOutlinedIcon /> Copiar
          </div>
        </div>
        <p ref={textToCopyRef}>{"abntReference"}</p>
      </Box>
      {isCopied && (
        <Alert severity="success" className={Styles.alert}>
          Texto copiado com sucesso!
        </Alert>
      )}
    </>
  );
}
