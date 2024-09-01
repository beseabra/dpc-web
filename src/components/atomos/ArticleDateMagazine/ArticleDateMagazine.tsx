import styles from "./ArticleDateMagazine.module.css";

interface ArticleDateProps {
  date: Date;
}
export default function ArticleDateMagazine({ date }: ArticleDateProps) {
  return (
    <p className={styles.text}>
      <i>
        {new Date(date).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </i>
    </p>
  );
}
