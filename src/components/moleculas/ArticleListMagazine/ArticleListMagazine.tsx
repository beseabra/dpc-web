import { Post } from "@prisma/client";
import Link from "next/link";
import ArticleDateMagazine from "../../atomos/ArticleDateMagazine/ArticleDateMagazine";
import ArticleDescriptionMagazine from "../../atomos/ArticleDescriptionMagazine/ArticleDescriptionMagazine";
import ArticleTitleDescription from "../../atomos/ArticleTitleMagazine/ArticleTitleMagazine";
import ArticlesImageMagazine from "../../atomos/ArticlesImageMagazine/ArticlesImageMagazine";
import styles from "./articleListMagazine.module.css";

interface ArticleListMagazineProps {
  articlesPosts: Post[];
}

export default function ArticleListMagazine({
  articlesPosts,
}: ArticleListMagazineProps) {
  return (
    <div className={styles.container}>
      {articlesPosts.map((article, index) => (
        <div key={index}>
          <Link href={`/articles/${article.id}`} className={styles.links}>
            <ArticleDateMagazine date={article.createdAt} />
            <ArticleTitleDescription title={article.title} />

            <ArticlesImageMagazine src={"/ps.png"} alt={"/ps.png"} />

            <ArticleDescriptionMagazine description={article.content} />
          </Link>
        </div>
      ))}
    </div>
  );
}
