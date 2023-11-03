"use client";

import Image from "next/image";
import styles from "./header.module.css";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";

export default function Header() {
  const [login, setLogin] = useState(false);
  const closeLoginModal = () => {
    setLogin(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (login && !event.target.closest(".modal-content")) {
        closeLoginModal();
      }
    };
    if (login) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [login]);

  return (
    <>
      <div className={styles.header}>
        <Image
          src="/logo.svg"
          alt="Picture of the author"
          width={144}
          height={144}
        />
        <div className={styles.menu}>
          <a className={styles.menuItens} href="/">
            REVISTA
          </a>
          <a className={styles.menuItens} href="/about">
            EXPEDIENTE
          </a>
          <a className={styles.menuItens} href="/contact">
            SUBMISSÃO
          </a>
          <a className={styles.menuItens} href="/blog">
            PROJETO
          </a>
          <a className={styles.menuItens} onClick={() => setLogin(true)}>
            <PersonIcon htmlColor="#FFFFFF" />
          </a>
        </div>
      </div>
      {login && (
        <div className={styles.modalBackground} onClick={closeLoginModal}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <p>Conteúdo do Modal</p>
              <button onClick={closeLoginModal}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
