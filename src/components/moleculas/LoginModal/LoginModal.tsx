"use client";
import { login } from "@/app/api/actions/authActions";
import InputForms from "@/components/atomos/InputForms/InputForms";
import Image from "next/image";
import Link from "next/link";
import { GoogleSignInButton } from "../../atomos/AuthButton/AuthButton";
import styles from "./loginModal.module.css";

interface LoginModalProps {
  onClickClose: () => void;
}

export default function LoginModal({
  onClickClose: closeLoginModal,
}: LoginModalProps) {
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
          <form action={login}>
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

                <GoogleSignInButton />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
