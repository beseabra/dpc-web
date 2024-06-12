import styles from "./ArticleDescriptionMagazine.module.css";

interface ArticleTitleProps {
  description: string;
}

export default function ArticleDescriptionMagazine({
  description,
}: ArticleTitleProps) {
  return <p className={styles.description}>{description}</p>;
}
