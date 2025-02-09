import { getUserByEmail } from "@/app/api/actions/userAction";
import sessionCookie from "@/context/sessionCokie";
import { User } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";
import InputForms from "../../atomos/InputForms/InputForms";
import MagazineTitle from "../../atomos/MagazineTitle/MagazineTitle";
import PinkLine from "../../atomos/PinkLine/PinkLine";
import style from "./formsAuthor.module.css";

interface IFormsAuthor {
  onSubmit: (authorData: Partial<User>) => void;
  isCoAuthor?: boolean;
  authorData?: Partial<User>;
}

export default function FormsAuthor({ onSubmit, isCoAuthor }: IFormsAuthor) {
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

  const [disabled, setDisabled] = useState(false);
  const [mail, setMail] = useState("");
  const [user, setUser] = useState<Partial<User>>({});

  const fetchUserPayload = useCallback(async () => {
    const userPayload = await sessionCookie();
    if (userPayload) setMail(userPayload.email);
  }, []);

  const fetchAuthor = useCallback(async () => {
    if (mail) {
      const response = await getUserByEmail(mail);
      if (response) setUser(response);
    }
  }, [mail]);

  useEffect(() => {
    fetchUserPayload();
  }, [fetchUserPayload]);

  useEffect(() => {
    fetchAuthor();
  }, [fetchAuthor]);

  useEffect(() => {
    if (!isCoAuthor && user) {
      setAuthor({
        name: user.name || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        institution: user.institution || "",
        lattes: user.lattes || "",
        formation: user.formation || "",
        image: user.image || "",
      });
      setDisabled(true);
    }
  }, [isCoAuthor, user]);

  const handleAuthorChange = (e: { target: { name: string; value: string } }) => {
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
          disabled={disabled}
        />
        <InputForms
          label="Sobrenome"
          type=""
          value={author.lastName || ""}
          name="lastName"
          onChange={handleAuthorChange}
          disabled={disabled}
        />
      </div>
      <div className={style.containerInputs}>
        <InputForms
          label="Email"
          type=""
          value={author.email || ""}
          name="email"
          onChange={handleAuthorChange}
          disabled={disabled}
        />
        <InputForms
          label="Telefone"
          type=""
          value={author.phone || ""}
          name="phone"
          onChange={handleAuthorChange}
          disabled={disabled}
        />
      </div>
      <div className={style.containerInputs}>
        <InputForms
          label="Instituição vinculada"
          type=""
          value={author.institution || ""}
          name="institution"
          onChange={handleAuthorChange}
          disabled={disabled}
        />
        <InputForms
          label="Lattes"
          type=""
          value={author.lattes || ""}
          name="lattes"
          onChange={handleAuthorChange}
          disabled={disabled}
        />
      </div>
      <div className={style.containerInputs}>
        <InputForms
          label="Titulação"
          type=""
          value={author.formation || ""}
          name="formation"
          onChange={handleAuthorChange}
          disabled={disabled}
        />
        <InputForms
          label="Insira uma foto de perfil"
          type=""
          value={author.image || ""}
          name="image"
          onChange={handleAuthorChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
