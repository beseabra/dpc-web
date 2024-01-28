import { TextField } from "@mui/material";
import Image from "next/image";
import styles from "./loginModal.module.css";

interface LoginModalProps {
  onClickClose: () => void;
}

export default function LoginModal({
  onClickClose: closeLoginModal,
}: LoginModalProps) {
  return (
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
  );
}
