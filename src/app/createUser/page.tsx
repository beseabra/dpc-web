'use client'
import ImagePicker from "@/components/moleculas/ImagePicker/ImagePicker";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InputForms from "../../components/atomos/InputForms/InputForms";
import MagazineTitle from "../../components/atomos/MagazineTitle/MagazineTitle";
import PinkLine from "../../components/atomos/PinkLine/PinkLine";
import { createAccount } from "../api/actions/authActions";
import styles from "./page.module.css";

export default function CreateUser() {
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (url: string) => {
    setProfileImageUrl(url);
  };
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
  
    try {
      setLoading(true);
      const formData = new FormData(event.target as HTMLFormElement);
      if (profileImageUrl) {
        formData.append("image", profileImageUrl);
      }
  
      await createAccount(formData);
      alert("Conta criada com sucesso!");
      router.push("/");
    } catch (error) {
      console.error("Ocorreu um erro ao criar a conta:", error);
      alert("Erro ao criar a conta. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
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
          bucketRoute="public/"
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
        {loading &&<div className={styles.loading}> <CircularProgress /></div>}
        <div className={styles.containerButton}>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}
