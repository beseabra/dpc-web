"use client";

import PersonIcon from "@mui/icons-material/Person";
import { TextField } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
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
      {login && (
        <div className={styles.modalBackground}>
          <div className={styles.modal}>
            <div className={styles.buttonContainerClose}>
              <button className={styles.buttonClose} onClick={closeLoginModal}>
                X
              </button>
            </div>

            <Image
              src="/simpleLogo.svg"
              alt="Picture of the author"
              width={120}
              height={120}
            />

            <div className={styles.modalContent}>
              <p>Faça seu login:</p>
              <div className={styles.loginComponents}>
                <TextField
                  id="outlined-read-only-input"
                  label="E-mail"
                  type="email"
                  variant="filled"
                />

                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                />
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.buttonOpen} onClick={closeLoginModal}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
