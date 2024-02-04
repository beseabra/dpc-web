"use client";
import { useParams } from "next/navigation";
import Footer from "../../../../components/moleculas/Footer/Footer";
import Header from "../../../../components/moleculas/Header/Header";
import styles from "./page.module.css";

export default function Articles() {
  const params = useParams();

  console.log(params);

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.containerMagazinePosts}>ARTIGO INDIVIDUAL</div>
      <Footer />
    </main>
  );
}
