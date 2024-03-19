import MagazineTitle from "../../../components/atomos/MagazineTitle/MagazineTitle";
import MemberProject from "../../../components/atomos/MemberProject/Member";
import { collaborator } from "../../../components/list/collaborator/collaborator";
import Footer from "../../../components/moleculas/Footer/Footer";
import Header from "../../../components/moleculas/Header/Header";
import styles from "./page.module.css";
export default function Project() {
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <div>
          <MagazineTitle title="Sobre a Revista" />
          <p>
            O "Despertar para a Ciência" é um projeto de extensão da UTFPR-CP
            dedicado a fomentar o interesse pela ciência em pessoas de todas as
            idades. Buscamos desmistificar a ciência, tornando-a acessível e
            empolgante. Nossa missão inclui instigar a paixão pela ciência,
            especialmente entre jovens e adultos, e inspirar os jovens a
            considerar carreiras científicas. Compartilhamos informações
            científicas de maneira simples e envolvente em nossas redes sociais,
            realizamos atividades práticas em escolas e eventos públicos, e
            desenvolvemos jogos interativos, como o "Bingo Consciência" e o
            “Passa ou repassa”, para estimular a curiosidade. O Projet é uma
            jornada emocionante em direção à descoberta e ao aprendizado, com a
            missão de instigar um futuro mais iluminado pela ciência. Junte-se a
            nós nessa busca pelo conhecimento científico e na inspiração da
            próxima geração de cientistas.
          </p>
        </div>
        <MagazineTitle title="Missão, visão e valores" />
        <p>
          <strong>Missão:</strong> Instigar a paixão pela ciência, especialmente
          entre jovens e adultos, e inspirar os jovens a considerar carreiras
          científicas.
        </p>
        <p>
          <strong>Visão:</strong> Ser referência em divulgação científica,
          fomentando o interesse pela ciência em pessoas de todas as idades.
        </p>
        <p>
          <strong>Valores:</strong> Acessibilidade, empolgação, desmistificação,
          simplicidade, envolvimento, inspiração e paixão.
        </p>
        <MagazineTitle title="Nosso time" />
        <MemberProject collaborator={collaborator} />
      </div>
      <Footer />
    </main>
  );
}
