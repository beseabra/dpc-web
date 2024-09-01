interface ArticleDateProps {
  date: string;
}

import styles from "./ArticleDate.module.css";
export default function ArticleDate({ date }: ArticleDateProps) {
  return (
    <p className={styles.fontSize}>
      <i> {date}</i>
    </p>
  );
}
