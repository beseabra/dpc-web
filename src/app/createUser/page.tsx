import ImagePicker from "@/components/moleculas/ImagePicker/ImagePicker";
import InputForms from "../../components/atomos/InputForms/InputForms";
import MagazineTitle from "../../components/atomos/MagazineTitle/MagazineTitle";
import PinkLine from "../../components/atomos/PinkLine/PinkLine";
import { createAccount } from "../api/actions/authActions";
import styles from "./page.module.css";

export default function CreateUser() {
  return (
    <div className={styles.body}>
      <h3>Preencha os campos abaixo para concluir seu cadastro:</h3>
      <MagazineTitle title="Pessoais" />
      <PinkLine />
      <form action={createAccount}>
        <div className={styles.container}>
          <InputForms id="Name" type="text" name="name" label="Nome" />
          <InputForms
            id="lastName"
            type="text"
            name="lastName"
            label="Sobrenome"
          />
        </div>
        <ImagePicker id="profileImage" name="profileImage" label="Foto de Perfil" />
        <div className={styles.container}>
          <InputForms id="Email" type="email" name="email" label="Email" />
          <InputForms id="phone" type="tel" name="phone" label="Telefone" />
        </div>
        <div style={{ width: "100%", marginTop: "1rem" }}>
          <MagazineTitle title="Acadêmico" />
        </div>
        <PinkLine />
        <div className={styles.container}>
          <InputForms id="lattes" type="text" name="lattes" label="Lattes" />
          <InputForms
            id="institution"
            type="text"
            name="institution"
            label="Instituição"
          />
        </div>
        <div className={styles.container}>
          <InputForms
            id="position"
            type="text"
            name="position"
            label="Posição"
          />
          <InputForms
            id="formation"
            type="text"
            name="formation"
            label="Formação"
          />
        </div>
        <div style={{ width: "100%", marginTop: "1rem" }}>
          <MagazineTitle title="Senha" />
        </div>
        <PinkLine />
        <div className={styles.container}>
          <InputForms
            id="password"
            type="password"
            name="password"
            label="Senha"
          />
          <InputForms
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            label="Confirmar Senha"
          />
        </div>
        <div className={styles.containerButton}>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}
