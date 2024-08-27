import { cookies } from "next/headers";
import Carousel from "../components/moleculas/carousel/Carousel";
import RecentNews from "../components/templates/BodyColumns/BodyColumns";
import { openSessionToken } from "./api/service/authService";
import styles from "./page.module.css";

export default async function Home() {
  let userPayload;

  const sessionCookie = cookies().get("session");
  if (sessionCookie) {
    try {
      userPayload = await openSessionToken(sessionCookie.value);
    } catch (error) {
      console.error("Erro ao obter o payload do usuário:", error);
    }
  }

  return (
    <main className={styles.main}>
      <Carousel />
      <RecentNews />
      <div style={{ height: "5rem" }}>
        TIPO: {userPayload ? userPayload.type : "Usuário não autenticado"}
      </div>
    </main>
  );
}
