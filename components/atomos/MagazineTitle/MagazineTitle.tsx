import styles from "./MagazineTitle.module.css";
interface MagazineTitleProps {
  title: string;
}

export default function MagazineTitle({ title }: MagazineTitleProps) {
  return <h2 className={styles.container}>{title}</h2>;
}
