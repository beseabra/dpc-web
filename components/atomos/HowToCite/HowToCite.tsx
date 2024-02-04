import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import { Alert, Box } from "@mui/material";
import { useRef, useState } from "react";
import Styles from "./howToCite.module.css";

interface IArtigoReference {
  title: string;
  writer: string;
  date: string;
  area: string;
  volume: string;
  number: string;
  year: string;
  version: string;
  author: {
    author: string;
    coAuthor: string;
  };
}

interface IHowToCiteProps {
  reference?: IArtigoReference;
}

export default function ArtigoReference({ reference }: IHowToCiteProps) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    return `${day}/${month}/${year}`;
  };

  const abntReference = `${reference?.author.author.toUpperCase()}; ${reference?.author.coAuthor.toUpperCase()}. ${
    reference?.title
  }. ${reference?.writer}. ${reference?.date}. ${reference?.area}, v. ${
    reference?.volume
  }, n. ${reference?.number}, ${reference?.year}. ${
    reference?.version
  }. Disponível em: ${currentUrl}. Acesso em: ${getCurrentDate()}.`;

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
        <p ref={textToCopyRef}>{abntReference}</p>
      </Box>
      {isCopied && (
        <Alert severity="success" className={Styles.alert}>
          Texto copiado com sucesso!
        </Alert>
      )}
    </>
  );
}
