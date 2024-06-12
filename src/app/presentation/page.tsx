import MagazineTitle from "../../components/atomos/MagazineTitle/MagazineTitle";
import Member from "../../components/atomos/Member/Member";
import { collaborator } from "../../components/list/collaborator/collaborator";
import Contacts from "../../components/moleculas/contacts/contacts";
import styles from "./page.module.css";
export default function Presentation() {
  return (
    <main>
      <div className={styles.container}>
        <div>
          <MagazineTitle title="Sobre a Revista" />
          <p>
            A revista Despertar para a ciência é uma publicação mensal, desde
            2023 com o título Blogs de Ciência da universidade tecnológica
            federal do Paraná, sob o ISSN XXXX-XXXX. Seu conteúdo é selecionado
            pelo comitê científico do projeto.
          </p>
        </div>
        <MagazineTitle title="Membros" />

        <Member collaborator={collaborator} />

        <Contacts />
      </div>
    </main>
  );
}
