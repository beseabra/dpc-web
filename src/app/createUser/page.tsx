"use client";
import { FormEvent, useState } from "react";
import InputForms from "../../components/atomos/InputForms/InputForms";
import MagazineTitle from "../../components/atomos/MagazineTitle/MagazineTitle";
import PinkLine from "../../components/atomos/PinkLine/PinkLine";
import { createAccount } from "../api/actions/authActions";
import styles from "./page.module.css";

interface InfoUser {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  lattes: string;
  position: string;
  formation: string;
  password: string;
  confirmPassword: string;
  image: string;
  institution: string;
}

export default function CreateUser() {
  const [infoUser, setInfoUser] = useState<InfoUser>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    lattes: "",
    position: "",
    formation: "",
    password: "",
    confirmPassword: "",
    image: "",
    institution: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(infoUser).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await createAccount(formData);
  };

  return (
    <>
      <div className={styles.body}>
        <h3>Preencha os campos abaixo para concluir seu cadastro:</h3>
        <div style={{ width: "100%", marginTop: "0.3rem" }}>
          <MagazineTitle title="Pessoais" />
        </div>
        <PinkLine />
        <form onSubmit={handleSubmit}>
          <div>
            <InputForms
              label=""
              type="file"
              name="image"
              value={infoUser.image}
              onChange={handleChange}
            />
          </div>
          <div className={styles.container}>
            <InputForms
              label="Nome"
              type=""
              name="name"
              value={infoUser.name}
              onChange={handleChange}
            />
            <InputForms
              label="Sobrenome"
              type=""
              name="lastName"
              value={infoUser.lastName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.container}>
            <InputForms
              label="Email"
              id="email"
              type="email"
              name="email"
              value={infoUser.email}
              onChange={handleChange}
            />
            <InputForms
              id="phone"
              label="Telefone"
              type="phone"
              name="phone"
              value={infoUser.phone}
              onChange={handleChange}
            />
          </div>
          <div style={{ width: "100%", marginTop: "1rem" }}>
            <MagazineTitle title="Acadêmico" />
          </div>
          <PinkLine />
          <div className={styles.container}>
            <InputForms
              id="lattes"
              label="Lattes"
              type="Universidade/Instituição"
              name="lattes"
              value={infoUser.lattes}
              onChange={handleChange}
            />
            <InputForms
              id="institution"
              label="Universidade/Instituição"
              type=""
              name="institution"
              value={infoUser.institution}
              onChange={handleChange}
            />
          </div>
          <div className={styles.container}>
            <InputForms
              id="position"
              label="Cargo"
              type=""
              name="position"
              value={infoUser.position}
              onChange={handleChange}
            />
            <InputForms
              id="formation"
              label="Formação"
              type=""
              name="formation"
              value={infoUser.formation}
              onChange={handleChange}
            />
          </div>
          <div style={{ width: "100%", marginTop: "1rem" }}>
            <MagazineTitle title="Senha" />
          </div>
          <PinkLine />
          <div className={styles.container}>
            <InputForms
              id="password"
              label="Senha"
              type="password"
              name="password"
              value={infoUser.password}
              onChange={handleChange}
            />
            <InputForms
              label="Confirmar senha"
              type="password"
              name="confirmPassword"
              value={infoUser.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className={styles.containerButton}>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </>
  );
}
