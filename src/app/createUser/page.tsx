import { TextField } from "@mui/material";
import MagazineTitle from "../../../components/atomos/MagazineTitle/MagazineTitle";
import PinkLine from "../../../components/atomos/PinkLine/PinkLine";
import Footer from "../../../components/moleculas/Footer/Footer";
import Header from "../../../components/moleculas/Header/Header";
import styles from "./page.module.css";

export default function CreateUser() {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <h3>Preencha os campos abaixo para concluir seu cadastro:</h3>
        <div style={{ width: "100%", marginTop: "0.3rem" }}>
          <MagazineTitle title="Pessoais" />
        </div>
        <PinkLine />
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
            style={{ width: "100%", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "100%", marginTop: "1rem" }}
          />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "100%", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "100%", marginTop: "1rem" }}
          />
        </div>
        <div style={{ width: "100%", marginTop: "1rem" }}>
          <MagazineTitle title="Academico" />
        </div>
        <PinkLine />
        <div style={{ display: "flex", gap: "1rem" }}>
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "100%", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "100%", marginTop: "1rem" }}
          />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "100%", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "100%", marginTop: "1rem" }}
          />
        </div>
        <div style={{ width: "100%", marginTop: "1rem" }}>
          <MagazineTitle title="Senha" />
        </div>
        <PinkLine />
        <div style={{ display: "flex", gap: "1rem" }}>
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "100%", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-read-only-input"
            label="E-mail"
            type="email"
            variant="filled"
            style={{ width: "100%", marginTop: "1rem" }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
