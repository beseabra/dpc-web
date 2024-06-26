import MagazineDescription from "../../components/atomos/MagazineDescription/MagazineDescription";
import MagazineTitle from "../../components/atomos/MagazineTitle/MagazineTitle";
import MagazinePosts from "../../components/organismo/MagazinePosts/MagazinePosts";
import styles from "./page.module.css";

export default function magazine() {
  return (
    <main className={styles.main}>
      <div className={styles.containerMagazinePosts}>
        <MagazineTitle title="Revista Despertar para a ciência | ISSN XXXX-XXXX" />
        <MagazineDescription description="É publicada mensalmente, desde 2023 com o título Blogs de Ciência da universidade tecnológica federal do Paraná, sob o ISSN XXXX-XXXX. Seu conteúdo é selecionado pelo comitê científico do projeto." />
        <MagazinePosts />
      </div>
    </main>
  );
}
