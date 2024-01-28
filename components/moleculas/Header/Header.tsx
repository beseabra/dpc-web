"use client";

import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import styles from "./header.module.css";

export default function Header() {
  const [login, setLogin] = useState(false);
  const closeLoginModal = () => {
    setLogin(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const modalContent = document.querySelector(`.${styles.modalContent}`);
      if (login && modalContent && !modalContent.contains(event.target)) {
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
      {login && <LoginModal onClickClose={closeLoginModal} />}
    </>
  );
}
