import Footer from "../../components/moleculas/Footer/Footer";
import Header from "../../components/moleculas/Header/Header";
import RecentNews from "../../components/organismo/RecentNews/BodyColumns";
import Carousel from "../../components/moleculas/carousel/Carousel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Carousel />
      <RecentNews />
      <div style={{ height: "35rem" }}></div>

      <Footer />
    </main>
  );
}
