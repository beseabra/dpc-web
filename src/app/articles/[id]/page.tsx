"use client";
import useArticleById from "@/hooks/useArticleById";
import { Box, CircularProgress } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import CoverArticle from "../../../components/atomos/CoverArticle/CoverArticle";
import HowToCite from "../../../components/atomos/HowToCite/HowToCite";
import styles from "./page.module.css";

export default function Articles() {
  const params = useParams();

  const { articleById, loading } = useArticleById(String(params.id));

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
                  src={articleById?.author.image || "/user.png"}
                  alt="user"
                  width={200}
                  height={200}
                  objectFit="cover"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div>
                <h3>{articleById?.author.name}</h3>
                <h5>
                  {articleById?.author.formation} -{" "}
                  {articleById?.author.institution}{" "}
                </h5>
                <p>{articleById?.author.position}</p>
                <h6>Contato: {articleById?.author.email}</h6>
              </div>
            </Box>
            {articleById && articleById.coAuthors.length != 0 && (
              <Box className={styles.containerArticlesUser}>
                {articleById.coAuthors.map((coAuthor, index) => (
                  <div key={index} className={styles.imageProfile}>
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
                        {coAuthor.formation} - {coAuthor.institution}{" "}
                      </h5>
                      <p>{coAuthor.position}</p>
                      <h6>Contato: {coAuthor.email}</h6>
                    </div>
                  </div>
                ))}
              </Box>
            )}

            <HowToCite />
          </>
        )}
      </div>
    </main>
  );
}
