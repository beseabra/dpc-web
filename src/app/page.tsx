import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import Carousel from "../components/moleculas/carousel/Carousel";
import RecentNews from "../components/templates/BodyColumns/BodyColumns";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<div><CircularProgress/></div>}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<div><CircularProgress/></div>}>
        <RecentNews />
      </Suspense>
    </main>
  );
}
