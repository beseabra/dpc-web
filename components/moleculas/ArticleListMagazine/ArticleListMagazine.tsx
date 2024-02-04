import { Article } from "@mui/icons-material";
import Link from "next/link";
import ArticleDateMagazine from "../../atomos/ArticleDateMagazine/ArticleDateMagazine";
import ArticleDescriptionMagazine from "../../atomos/ArticleDescriptionMagazine/ArticleDescriptionMagazine";
import ArticleTitleDescription from "../../atomos/ArticleTitleMagazine/ArticleTitleMagazine";
import ArticlesImageMagazine from "../../atomos/ArticlesImageMagazine/ArticlesImageMagazine";
import styles from "./articleListMagazine.module.css";

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  image: { src: string; alt: string };
  writer: string;
  area: string;
  volume: string;
  number: string;
  year: string;
}

interface ArticleListMagazineProps {
  articlesPosts: Article[];
}

export default function ArticleListMagazine({
  articlesPosts,
}: ArticleListMagazineProps) {
  return (
    <div className={styles.container}>
      {articlesPosts.map((article, index) => (
        <div key={index}>
          <Link href={`/articles/${article.id}`} className={styles.links}>
            <ArticleDateMagazine date={article.date} />
            <ArticleTitleDescription title={article.title} />
            <ArticlesImageMagazine
              src={article.image.src}
              alt={article.image.alt}
            />

            <ArticleDescriptionMagazine description={article.description} />
          </Link>
        </div>
      ))}
    </div>
  );
}
