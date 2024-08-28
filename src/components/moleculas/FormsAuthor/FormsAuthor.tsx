import { User } from "@prisma/client";
import { useState } from "react";
import InputForms from "../../atomos/InputForms/InputForms";
import MagazineTitle from "../../atomos/MagazineTitle/MagazineTitle";
import PinkLine from "../../atomos/PinkLine/PinkLine";
import style from "./formsAuthor.module.css";

interface IFormsAuthor {
  onSubmit: (authorData: Partial<User>) => void;
  isCoAuthor?: boolean;
  autohorData?: Partial<User>;
}

export default function FormsAuthor({ onSubmit, isCoAuthor = false }: IFormsAuthor) {
  const [author, setAuthor] = useState<Partial<User>>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    institution: "",
    lattes: "",
    formation: "",
    image: "",
  });

  const handleAuthorChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    const updatedAuthor = { ...author, [name]: value };
    setAuthor(updatedAuthor);
    onSubmit(updatedAuthor);
  };

  return (
    <div className={style.containerForms}>
      <MagazineTitle title={isCoAuthor ? "Co-autor" : "Autor"} />
      <PinkLine />
      <div className={style.containerInputs}>
        <InputForms
          label="Nome/Nome Social"
          type=""
          value={author.name || ""}
          name="name"
          onChange={handleAuthorChange}
        />
        <InputForms
          label="Sobrenome"
          type=""
          value={author.lastName || ""}
          name="lastName"
          onChange={handleAuthorChange}
        />
      </div>
      <div className={style.containerInputs}>
        <InputForms
          label="Email"
          type=""
          value={author.email}
          name="email"
          onChange={handleAuthorChange}
        />
        <InputForms
          label="Telefone"
          type=""
          value={author.phone || ""}
          name="phone"
          onChange={handleAuthorChange}
        />
      </div>
      <div className={style.containerInputs}>
        <InputForms
          label="Instituição vinculada"
          type=""
          value={author.institution || ""}
          name="institution"
          onChange={handleAuthorChange}
        />
        <InputForms
          label="Lattes"
          type=""
          value={author.lattes || ""}
          name="lattes"
          onChange={handleAuthorChange}
        />
      </div>
      <div className={style.containerInputs}>
        <InputForms
          label="Titulação"
          type=""
          value={author.formation   || ""}
          name="graduation"
          onChange={handleAuthorChange}
        />
        <InputForms
          label="Insira uma foto de perfil"
          type=""
          value={author.image || ""}
          name="photo"
          onChange={handleAuthorChange}
        />
      </div>
    </div>
  );
}
