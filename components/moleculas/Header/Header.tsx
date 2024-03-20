"use client";

import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import styles from "./header.module.css";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
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
          onClick={() => (window.location.href = "/")}
        />
        <div className={styles.menu}>
          <a
            className={styles.menuItens}
            href="/magazine"
            style={{
              fontWeight: currentPage === "magazine" ? "bold" : "normal",
            }}
          >
            REVISTA
          </a>
          <a
            className={styles.menuItens}
            href="/presentation"
            style={{ fontWeight: currentPage === "about" ? "bold" : "normal" }}
          >
            EXPEDIENTE
          </a>
          <a
            className={styles.menuItens}
            href="/contact"
            style={{
              fontWeight: currentPage === "contact" ? "bold" : "normal",
            }}
          >
            SUBMISSÃO
          </a>
          <a
            className={styles.menuItens}
            href="/project"
            style={{
              fontWeight: currentPage === "project" ? "bold" : "normal",
            }}
          >
            PROJETO
          </a>
          <a className={styles.menuItens} onClick={() => setLogin(true)}>
            <PersonIcon htmlColor="var(--text-color-secondary)" />
          </a>
        </div>
      </div>
      {login && <LoginModal onClickClose={closeLoginModal} />}
    </>
  );
}
