"use client";
import { useState } from "react";
import InputForms from "../../../components/atomos/InputForms/InputForms";
import MagazineTitle from "../../../components/atomos/MagazineTitle/MagazineTitle";
import PinkLine from "../../../components/atomos/PinkLine/PinkLine";
import Footer from "../../../components/moleculas/Footer/Footer";
import Header from "../../../components/moleculas/Header/Header";
import Button from "../../../components/moleculas/button/Button";
import styles from "./page.module.css";

export default function CreateUser() {
  const [infoUser, setInfoUser] = useState({
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

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setInfoUser({ ...infoUser, [name]: value });
  };

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
          <InputForms
            label="Adicione uma foto"
            type="email"
            name="image"
            value={infoUser.image}
            onChange={handleChange}
          />
        </div>
        <div className={styles.container}>
          <InputForms
            label="Nome"
            type="email"
            name="name"
            value={infoUser.name}
            onChange={handleChange}
          />
          <InputForms
            label="Sobrenome"
            type="email"
            name="lastName"
            value={infoUser.lastName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.container}>
          <InputForms
            label="Email"
            type="email"
            name="email"
            value={infoUser.email}
            onChange={handleChange}
          />
          <InputForms
            label="Telefone"
            type="email"
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
            label="Lattes"
            type="Universidade/Instituição"
            name="lattes"
            value={infoUser.lattes}
            onChange={handleChange}
          />
          <InputForms
            label="Universidade/Instituição"
            type="email"
            name="institution"
            value={infoUser.institution}
            onChange={handleChange}
          />
        </div>
        <div className={styles.container}>
          <InputForms
            label="Cargo"
            type="email"
            name="position"
            value={infoUser.position}
            onChange={handleChange}
          />
          <InputForms
            label="Formação"
            type="email"
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
          <Button text="Cancelar" color="#7A7C8A" />
          <Button
            text="Cadastrar"
            color="#F19800"
            onClick={() => console.log(infoUser)}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
