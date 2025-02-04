"use client";
import { login } from "@/app/api/actions/authActions";
import InputForms from "@/components/atomos/InputForms/InputForms";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter(); 

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (!form.checkValidity()) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    const formData = new FormData(form);
    setLoading(true);

    try {
      const result = await login(formData);

      if (result.success) {
        closeLoginModal(); 
        router.push("/"); 
      } else {
        alert(result.message || "Erro ao fazer login.");
      }
    } catch (error) {
      alert("Erro ao fazer login, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleModalClick = (event: React.MouseEvent) => {
    event.stopPropagation(); 
  };

  return (
    <div
      className={styles.modalBackground}
      onClick={closeLoginModal} 
    >
      <div className={styles.modal} onClick={handleModalClick}>
        <div className={styles.buttonContainerClose}>
          <div
            className={styles.buttonClose}
            onClick={closeLoginModal} 
          >
            X
          </div>
        </div>

        <Image
          src="/simpleLogo.svg"
          alt="Logo"
          width={120}
          height={120}
        />
        <form onSubmit={handleLogin} onClick={handleModalClick}>
          <div className={styles.modalContent}>
            <p>Faça seu login:</p>
            <div className={styles.loginComponents}>
              <InputForms
                id="Email"
                type="email"
                name="email"
                label="Email"
                required 
              />
              <InputForms
                id="password"
                type="password"
                name="password"
                label="Senha"
                required 
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
  );
}