import { TextField } from "@mui/material";
import Image from "next/image";
import MagazineTitle from "../../atomos/MagazineTitle/MagazineTitle";
import styles from "./createUserModal.module.css";

interface CreateUserModal {
  setOpenCreateUserModal: () => void;
}

export default function CreateUserModal({
  setOpenCreateUserModal: closeModal,
}: CreateUserModal) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.buttonContainerClose}>
          <div className={styles.buttonClose} onClick={() => closeModal}>
            X
          </div>
        </div>

        <Image
          src="/simpleLogo.svg"
          alt="Picture of the author"
          width={120}
          height={120}
        />
        <h3>Preencha os campos abaixo para concluir seu cadastro:</h3>
        <div style={{ width: "100%", marginTop: "0.3rem" }}>
          <MagazineTitle title="Pessoais" />
        </div>
        <div
          style={{
            width: "100%",
            height: "0.2rem",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#C11F4D",
            borderRadius: "0.5rem",
          }}
        />
        <div>
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "61rem", marginTop: "1rem" }}
          />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "30rem", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "30rem", marginTop: "1rem" }}
          />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "30rem", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "30rem", marginTop: "1rem" }}
          />
        </div>
        <div style={{ width: "100%", marginTop: "1rem" }}>
          <MagazineTitle title="Academico" />
        </div>
        <div
          style={{
            width: "100%",
            height: "0.2rem",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#C11F4D",
            borderRadius: "0.5rem",
          }}
        />
        <div style={{ display: "flex", gap: "1rem" }}>
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "30rem", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "30rem", marginTop: "1rem" }}
          />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "30rem", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "30rem", marginTop: "1rem" }}
          />
        </div>
        <div style={{ width: "100%", marginTop: "1rem" }}>
          <MagazineTitle title="Senha" />
        </div>
        <div
          style={{
            width: "100%",
            height: "0.2rem",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#C11F4D",
            borderRadius: "0.5rem",
          }}
        />
        <div style={{ display: "flex", gap: "1rem" }}>
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "30rem", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "30rem", marginTop: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
}
