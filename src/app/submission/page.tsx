"use client";
import Footer from "../../../components/moleculas/Footer/Footer";
import Header from "../../../components/moleculas/Header/Header";
import FormsSubmission from "../../../components/organismo/FormsSubmission/FormsSubmission";
import styles from "./page.module.css";

export default function Submission() {
  return (
    <div className={styles.container}>
      <Header />
      <FormsSubmission />
      <Footer />
    </div>
  );
}
