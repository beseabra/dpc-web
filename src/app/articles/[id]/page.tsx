"use client";
import useArticleById from "@/hooks/useArticleById";
import { Box, CircularProgress } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import CoverArticle from "../../../components/atomos/CoverArticle/CoverArticle";
import HowToCite from "../../../components/atomos/HowToCite/HowToCite";
import { articlesPosts } from "../../../components/list/articlesPosts/articlesPosts";
import styles from "./page.module.css";

export default function Articles() {
  const params = useParams();

  const articleId = typeof params.id === "string" ? parseInt(params.id, 10) : 0;
  const articles = articlesPosts.find((article) => article.id === articleId);

  const { articleById, loading } = useArticleById(String(params.id));
  console.log(articleById);

  return (
    <main>
      <div className={styles.containerArticle}>
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            {articleById ? (
              <>
                {articleById.image && (
                  <CoverArticle
                    src={articleById.image}
                    alt={articleById.image}
                  />
                )}

                <h1>{articleById.title}</h1>
                <h6>V.XX, N.XX, XXXX - Atual</h6>
                <p>{articleById.article}</p>
              </>
            ) : (
              <p>Articles not found</p>
            )}
            <Box className={styles.containerArticlesUser}>
              <div className={styles.imageProfile}>
                <Image
                  src={articles ? articles?.author.profileImage : ""}
                  alt="user"
                  width={200}
                  height={200}
                  objectFit="cover"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div>
                <h3>{articles?.author.author}</h3>
                <h5>{articles?.author.descriptionAuthor}</h5>
                <p>{articles?.author.apresentacaoCoAuthor}</p>
                <h6>Contato: {articles?.author.emailAuthor}</h6>
              </div>
            </Box>
            {articles?.author.coAuthor && (
              <Box className={styles.containerArticlesUser}>
                <div className={styles.imageProfile}>
                  <Image
                    src={articles?.author.profileImageCoAuthor}
                    alt="user"
                    width={200}
                    height={200}
                    objectFit="cover"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div>
                  <h3>{articles?.author.coAuthor}</h3>
                  <h5>{articles?.author.descriptionCoAuthor}</h5>
                  <p>{articles?.author.apresentacaoCoAuthor}</p>
                  <h6>Contato: {articles?.author.emailCoAuthor}</h6>
                </div>
              </Box>
            )}
            <HowToCite />
          </>
        )}
      </div>
    </main>
  );
}
