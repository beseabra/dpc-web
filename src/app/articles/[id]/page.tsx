'use client';
import { getArticleById } from "@/app/api/actions/articloAction";
import { Box, CircularProgress } from "@mui/material";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CoverArticle from "../../../components/atomos/CoverArticle/CoverArticle";
import HowToCite from "../../../components/atomos/HowToCite/HowToCite";
import styles from "./page.module.css";

type ArticleWithAuthorAndCoAuthors = Prisma.ArticleGetPayload<{
  include: { author: true; coAuthors: true };
}>;

export default function Articles() {
  const params = useParams();
  const [article, setArticle] = useState<ArticleWithAuthorAndCoAuthors | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      if (!params.id) return;
      setLoading(true);
      try {
        const fetchedArticle = await getArticleById(params.id as string);
        setArticle(fetchedArticle);
      } catch (error) {
        console.error("Failed to fetch article", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [params.id]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <main>
      <div className={styles.containerArticle}>
        {article.image && <CoverArticle src={article.image} alt={article.image} />}
        <h1>{article.title}</h1>
        <h6>V.XX, N.XX, XXXX - Atual</h6>
        <p>{article.article}</p>

        <Box className={styles.containerArticlesUser}>
          <div className={styles.imageProfile}>
            <Image
              src={article.author.image || "/user.png"}
              alt="user"
              width={200}
              height={200}
              objectFit="cover"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <h3>{article.author.name}</h3>
            <h5>
              {article.author.formation} - {article.author.institution}
            </h5>
            <p>{article.author.position}</p>
            <h6>Contato: {article.author.email}</h6>
          </div>
        </Box>

        {article.coAuthors.length > 0 && (
          <Box className={styles.containerArticlesUser}>
            {article.coAuthors.map((coAuthor) => (
              <div key={coAuthor.id} className={styles.imageProfile}>
                <Image
                  src={coAuthor.image || ""}
                  alt="user"
                  width={200}
                  height={200}
                  objectFit="cover"
                  style={{ borderRadius: "50%" }}
                />
                <div>
                  <h3>{coAuthor.name}</h3>
                  <h5>
                    {coAuthor.formation} - {coAuthor.institution}
                  </h5>
                  <p>{coAuthor.position}</p>
                  <h6>Contato: {coAuthor.email}</h6>
                </div>
              </div>
            ))}
          </Box>
        )}

        <HowToCite />
      </div>
    </main>
  );
}
