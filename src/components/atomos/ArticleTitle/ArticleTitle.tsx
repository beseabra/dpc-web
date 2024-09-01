import styles from "./ArticleTitle.module.css";
interface ArticleTitleProps {
  title: string;
}

export default function ArticleTitle({ title }: ArticleTitleProps) {
  return <h1 className={styles.title}>{title}</h1>;
}
