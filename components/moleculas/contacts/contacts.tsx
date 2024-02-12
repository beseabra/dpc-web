import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "next/link";
import MagazineTitle from "../../atomos/MagazineTitle/MagazineTitle";
import styles from "./contacts.module.css";

export default function Contacts() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        marginBottom: "5rem",
      }}
    >
      <MagazineTitle title="Contato" />
      <div className={styles.container}>
        <InstagramIcon />
        <Link className={styles.link} href="https://www.instagram.com/">
          @despertarparaaciencia
        </Link>
      </div>
      <div className={styles.container}>
        <FacebookIcon />
        <Link className={styles.link} href="https://www.facebook.com/">
          Facebook Despertar para a ciência
        </Link>
      </div>
      <div className={styles.container}>
        <MailOutlineIcon />
        <Link className={styles.link} href="mailto: seabra@alunos.utfpr.edu.br">
          depsertarparaaciencia@gmail.com
        </Link>
      </div>
    </div>
  );
}
