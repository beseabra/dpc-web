import styles from "./ArticleTitleMagazine.module.css";
interface ArticleTitleProps {
  title: string;
}

export default function ArticleTitleDescription({ title }: ArticleTitleProps) {
  return <h3 className={styles.text}>{title}</h3>;
}
