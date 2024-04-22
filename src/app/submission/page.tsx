import PinkLine from "../../../components/atomos/PinkLine/PinkLine";
import Footer from "../../../components/moleculas/Footer/Footer";
import Header from "../../../components/moleculas/Header/Header";
import SubmissionText from "../../../components/moleculas/SubmissionText/SubmissionText";
import style from "./page.module.css";
export default function Submission() {
  return (
    <div>
      <Header />
      <h1>Formulário de submissão</h1>
      <p>
        Preenha o formuário abaixo atentatemente, uma vez enviados, não é
        possíve realizar edições ou exclusão das informações enviadas.
      </p>
      <div className={style.container}>
        <h1>Autor</h1>
        <button>+</button>
      </div>
      <PinkLine />
      <SubmissionText />
      <Footer />
    </div>
  );
}
