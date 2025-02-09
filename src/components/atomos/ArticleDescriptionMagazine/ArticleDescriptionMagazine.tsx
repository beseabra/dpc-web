import styles from "./ArticleDescriptionMagazine.module.css";

interface ArticleTitleProps {
  description: string;
}

export default function ArticleDescriptionMagazine({
  description,
}: ArticleTitleProps) {
  return <p dangerouslySetInnerHTML={{ __html: description }} className={styles.description} />;
}
