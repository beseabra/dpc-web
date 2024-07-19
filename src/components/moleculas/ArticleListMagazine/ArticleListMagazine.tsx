import { Article } from "@prisma/client";
import Link from "next/link";
import ArticleDateMagazine from "../../atomos/ArticleDateMagazine/ArticleDateMagazine";
import ArticleDescriptionMagazine from "../../atomos/ArticleDescriptionMagazine/ArticleDescriptionMagazine";
import ArticleTitleDescription from "../../atomos/ArticleTitleMagazine/ArticleTitleMagazine";
import ArticlesImageMagazine from "../../atomos/ArticlesImageMagazine/ArticlesImageMagazine";
import styles from "./articleListMagazine.module.css";

interface ArticleListMagazineProps {
  articlesPosts: Article[];
}

export default function ArticleListMagazine({
  articlesPosts,
}: ArticleListMagazineProps) {
  return (
    <div className={styles.container}>
      {articlesPosts &&
        articlesPosts.map((article, index) => (
          <div key={index}>
            <Link href={`/articles/${article.id}`} className={styles.links}>
              <ArticleDateMagazine date={article.createdAt} />
              <ArticleTitleDescription title={article.title} />
              {article.image && (
                <ArticlesImageMagazine
                  src={article.image}
                  alt={article.image}
                />
              )}

              <ArticleDescriptionMagazine
                description={article.article.substring(0, 200)}
              />
            </Link>
          </div>
        ))}
    </div>
  );
}
