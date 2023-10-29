import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Carousel from "../../components/carousel/Carousel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Carousel />
      <div style={{ height: "35rem" }}></div>
      <Footer />
    </main>
  );
}
