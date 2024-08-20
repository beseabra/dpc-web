'use client'
import ImagePicker from "@/components/moleculas/ImagePicker/ImagePicker";
import { useState } from "react";
import InputForms from "../../components/atomos/InputForms/InputForms";
import MagazineTitle from "../../components/atomos/MagazineTitle/MagazineTitle";
import PinkLine from "../../components/atomos/PinkLine/PinkLine";
import { createAccount } from "../api/actions/authActions";
import styles from "./page.module.css";

export default function CreateUser() {
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  const handleImageUpload = (url: string) => {
    setProfileImageUrl(url);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    if (profileImageUrl) {
      formData.append("image", profileImageUrl);
    }

    await createAccount(formData);
  };

  return (
    <div className={styles.body}>
      <h3>Preencha os campos abaixo para concluir seu cadastro:</h3>
      <MagazineTitle title="Pessoais" />
      <PinkLine />
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <InputForms id="Name" type="text" name="name" label="Nome" />
          <InputForms id="lastName" type="text" name="lastName" label="Sobrenome" />
        </div>
        <div className={styles.container}>
          <InputForms id="Email" type="email" name="email" label="Email" />
          <InputForms id="phone" type="tel" name="phone" label="Telefone" />
        </div>

        <div className={styles.containerImagePicker}>   
          <ImagePicker
          id="profileImage"
          name="profileImage"
          label="Foto de Perfil"
          onImageUpload={handleImageUpload}
        />
        </div>
     
        <div style={{ width: "100%", marginTop: "1rem" }}>
          <MagazineTitle title="Acadêmico" />
        </div>
        <PinkLine />
        <div className={styles.container}>
          <InputForms id="lattes" type="text" name="lattes" label="Lattes" />
          <InputForms id="institution" type="text" name="institution" label="Instituição" />
        </div>
        <div className={styles.container}>
          <InputForms id="position" type="text" name="position" label="Posição" />
          <InputForms id="formation" type="text" name="formation" label="Formação" />
        </div>
        <div style={{ width: "100%", marginTop: "1rem" }}>
          <MagazineTitle title="Senha" />
        </div>
        <PinkLine />
        <div className={styles.container}>
          <InputForms id="password" type="password" name="password" label="Senha" />
          <InputForms id="confirmPassword" type="password" name="confirmPassword" label="Confirmar Senha" />
        </div>
        <div className={styles.containerButton}>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}
