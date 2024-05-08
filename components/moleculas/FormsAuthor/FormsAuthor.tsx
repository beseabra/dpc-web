import { useState } from "react";
import InputForms from "../../atomos/InputForms/InputForms";
import MagazineTitle from "../../atomos/MagazineTitle/MagazineTitle";
import PinkLine from "../../atomos/PinkLine/PinkLine";
import style from "./formsAuthor.module.css";

export default function FormsAuthor() {
  const [article, setArticle] = useState("");
  const [refs, setRefs] = useState("");
  const [infosForms, setInfosForms] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    institution: "",
    lattes: "",
    graduation: "",
    photo: "",
  });
  const [showAdditionalAuthor, setShowAdditionalAuthor] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInfosForms({ ...infosForms, [name]: value });
  };

  const handleAddAuthor = () => {
    setShowAdditionalAuthor(true);
  };

  return (
    <div className={style.containerForms}>
      <MagazineTitle title="Formulário de submissão" />

      <p>
        Preenha o formulário abaixo atentamente, uma vez enviados, não é
        possível realizar edições ou exclusões das informações enviadas.
      </p>
      <div className={style.container}>
        <MagazineTitle title="Autor" />
        <button
          onClick={handleAddAuthor}
          disabled={showAdditionalAuthor}
          className={style.buttonAddAuthor}
        >
          <MagazineTitle title="+" />
        </button>
      </div>
      <PinkLine />
      <div className={style.containerInputs}>
        <InputForms
          label="Nome/Nome Social"
          type=""
          value={infosForms.name}
          name="name"
          onChange={handleChange}
        />
        <InputForms
          label="Sobrenome"
          type=""
          value={infosForms.lastName}
          name="lastName"
          onChange={handleChange}
        />
      </div>
      <div className={style.containerInputs}>
        <InputForms
          label="email"
          type=""
          value={infosForms.email}
          name="email"
          onChange={handleChange}
        />
        <InputForms
          label="Telefone"
          type=""
          value={infosForms.phone}
          name="phone"
          onChange={handleChange}
        />
      </div>
      <div className={style.containerInputs}>
        <InputForms
          label="instituição vinculada"
          type=""
          value={infosForms.institution}
          name="institution"
          onChange={handleChange}
        />
        <InputForms
          label="Lattes"
          type=""
          value={infosForms.lattes}
          name="lattes"
          onChange={handleChange}
        />
      </div>
      <div className={style.containerInputs}>
        <InputForms
          label="Titulação"
          type=""
          value={infosForms.graduation}
          name="graduation"
          onChange={handleChange}
        />
        <InputForms
          label="Insira uma foto de perfil"
          type=""
          value={infosForms.photo}
          name="photo"
          onChange={handleChange}
        />
      </div>
      {showAdditionalAuthor && (
        <>
          <div className={style.container}>
            <MagazineTitle title="Co-autor" />
          </div>
          <PinkLine />
          <div className={style.containerInputs}>
            <InputForms
              label="Nome/Nome Social"
              type=""
              value={infosForms.name}
              name="name"
              onChange={handleChange}
            />
            <InputForms
              label="Sobrenome"
              type=""
              value={infosForms.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div className={style.containerInputs}>
            <InputForms
              label="email"
              type=""
              value={infosForms.email}
              name="email"
              onChange={handleChange}
            />
            <InputForms
              label="Telefone"
              type=""
              value={infosForms.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className={style.containerInputs}>
            <InputForms
              label="instituição vinculada"
              type=""
              value={infosForms.institution}
              name="institution"
              onChange={handleChange}
            />
            <InputForms
              label="Lattes"
              type=""
              value={infosForms.lattes}
              name="lattes"
              onChange={handleChange}
            />
          </div>
          <div className={style.containerInputs}>
            <InputForms
              label="Titulação"
              type=""
              value={infosForms.graduation}
              name="graduation"
              onChange={handleChange}
            />
            <InputForms
              label="Insira uma foto de perfil"
              type=""
              value={infosForms.photo}
              name="photo"
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </div>
  );
}
