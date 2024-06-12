"use client";
import { TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoogleSignInButton } from "../../atomos/AuthButton/AuthButton";
import styles from "./loginModal.module.css";

interface LoginModalProps {
  onClickClose: () => void;
}

export default function LoginModal({
  onClickClose: closeLoginModal,
}: LoginModalProps) {
  const [openCreateUserModal, setOpenCreateUserModal] = useState(false);
  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <div className={styles.buttonContainerClose}>
            <div className={styles.buttonClose} onClick={closeLoginModal}>
              X
            </div>
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
                autoComplete="current-passsword"
                variant="filled"
              />
            </div>
            <div className={styles.buttonContainer}>
              <Link href="/createUser" className={styles.newLogin}>
                Não tem cadastro? cadastre-se
              </Link>

              <button className={styles.buttonOpen} onClick={closeLoginModal}>
                Entrar
              </button>

              <GoogleSignInButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
