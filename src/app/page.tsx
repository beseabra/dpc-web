import Carousel from "../components/moleculas/carousel/Carousel";
import RecentNews from "../components/templates/BodyColumns/BodyColumns";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Carousel />
      <RecentNews />
    </main>
  );
}
