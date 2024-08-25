import styles from './ArticleDescription.module.css';
interface ArticleTitleProps {
  description: string;
}

export default function ArticleDescription({ description }: ArticleTitleProps) {
  return <p className={styles.description}>{description}</p>;
}
