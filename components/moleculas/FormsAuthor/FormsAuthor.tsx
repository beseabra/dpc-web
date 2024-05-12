import { useState } from "react";
import InputForms from "../../atomos/InputForms/InputForms";
import MagazineTitle from "../../atomos/MagazineTitle/MagazineTitle";
import PinkLine from "../../atomos/PinkLine/PinkLine";
import style from "./formsAuthor.module.css";

interface IFormsAuthor {
  onSubmit: (authorData: any) => void;
}

export default function FormsAuthor({ onSubmit }: IFormsAuthor) {
  const [author, setAuthor] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    institution: "",
    lattes: "",
    graduation: "",
    photo: "",
  });

  const [coAuthor, setCoAuthor] = useState({
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

  const handleAuthorChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setAuthor({ ...author, [name]: value });
  };

  const handleCoAuthorChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setCoAuthor({ ...coAuthor, [name]: value });
  };

  const handleAddAuthor = () => {
    setShowAdditionalAuthor(true);
  };

  const handleSubmit = () => {
    onSubmit({ author, coAuthor });
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
          value={author.name}
          name="name"
          onChange={handleAuthorChange}
        />
        <InputForms
          label="Sobrenome"
          type=""
          value={author.lastName}
          name="lastName"
          onChange={handleAuthorChange}
        />
      </div>
      <div className={style.containerInputs}>
        <InputForms
          label="email"
          type=""
          value={author.email}
          name="email"
          onChange={handleAuthorChange}
        />
        <InputForms
          label="Telefone"
          type=""
          value={author.phone}
          name="phone"
          onChange={handleAuthorChange}
        />
      </div>
      <div className={style.containerInputs}>
        <InputForms
          label="instituição vinculada"
          type=""
          value={author.institution}
          name="institution"
          onChange={handleAuthorChange}
        />
        <InputForms
          label="Lattes"
          type=""
          value={author.lattes}
          name="lattes"
          onChange={handleAuthorChange}
        />
      </div>
      <div className={style.containerInputs}>
        <InputForms
          label="Titulação"
          type=""
          value={author.graduation}
          name="graduation"
          onChange={handleAuthorChange}
        />
        <InputForms
          label="Insira uma foto de perfil"
          type=""
          value={author.photo}
          name="photo"
          onChange={handleAuthorChange}
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
              value={coAuthor.name}
              name="name"
              onChange={handleCoAuthorChange}
            />
            <InputForms
              label="Sobrenome"
              type=""
              value={coAuthor.lastName}
              name="lastName"
              onChange={handleCoAuthorChange}
            />
          </div>
          <div className={style.containerInputs}>
            <InputForms
              label="email"
              type=""
              value={coAuthor.email}
              name="email"
              onChange={handleCoAuthorChange}
            />
            <InputForms
              label="Telefone"
              type=""
              value={coAuthor.phone}
              name="phone"
              onChange={handleCoAuthorChange}
            />
          </div>
          <div className={style.containerInputs}>
            <InputForms
              label="instituição vinculada"
              type=""
              value={coAuthor.institution}
              name="institution"
              onChange={handleCoAuthorChange}
            />
            <InputForms
              label="Lattes"
              type=""
              value={coAuthor.lattes}
              name="lattes"
              onChange={handleCoAuthorChange}
            />
          </div>
          <div className={style.containerInputs}>
            <InputForms
              label="Titulação"
              type=""
              value={coAuthor.graduation}
              name="graduation"
              onChange={handleCoAuthorChange}
            />
            <InputForms
              label="Insira uma foto de perfil"
              type=""
              value={coAuthor.photo}
              name="photo"
              onChange={handleCoAuthorChange}
            />
          </div>
        </>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
