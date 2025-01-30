"use client";
import { login } from "@/app/api/actions/authActions";
import InputForms from "@/components/atomos/InputForms/InputForms";
import { CircularProgress } from "@mui/material";
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
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    setLoading(true);
    try {
      await login(formData);
      setLoading(false);
      closeLoginModal();
    } catch (error) {
      alert("Erro ao fazer login, tente novamente");
      setLoading(false);
    }
  };

  const handleModalClick = (event: React.MouseEvent) => {
    // Impede que cliques dentro da modal fechem a modal
    event.stopPropagation();
  };

  return (
    <>
      <div
        className={styles.modalBackground}
        onClick={closeLoginModal} // Fecha a modal ao clicar no fundo
      >
        <div className={styles.modal} onClick={handleModalClick}>
          <div className={styles.buttonContainerClose}>
            <div className={styles.buttonClose} onClick={closeLoginModal}>
              X
            </div>
          </div>

          <Image
            src="/simpleLogo.svg"
            alt="Logo"
            width={120}
            height={120}
          />
          <form onSubmit={handleLogin}>
            <div className={styles.modalContent}>
              <p>Faça seu login:</p>
              <div className={styles.loginComponents}>
                <InputForms
                  id="Email"
                  type="email"
                  name="email"
                  label="Email"
                />
                <InputForms
                  id="password"
                  type="password"
                  name="password"
                  label="Senha"
                />
              </div>
              <div className={styles.buttonContainer}>
                <Link
                  href="/createUser"
                  className={styles.newLogin}
                  onClick={closeLoginModal}
                >
                  Não tem cadastro? cadastre-se
                </Link>
                <button className={styles.buttonOpen} type="submit">
                  Entrar
                </button>
                {loading && <CircularProgress className={styles.loading} />}
                <GoogleSignInButton />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
