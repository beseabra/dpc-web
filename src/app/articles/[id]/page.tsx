"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import CoverArticle from "../../../../components/atomos/CoverArticle/CoverArticle";
import HowToCite from "../../../../components/atomos/HowToCite/HowToCite";
import { articlesPosts } from "../../../../components/list/articlesPosts/articlesPosts";
import Footer from "../../../../components/moleculas/Footer/Footer";
import Header from "../../../../components/moleculas/Header/Header";
import styles from "./page.module.css";

export default function Articles() {
  const params = useParams();

  const articleId = typeof params.id === "string" ? parseInt(params.id, 10) : 0;
  const article = articlesPosts.find((article) => article.id === articleId);

  console.log(article?.image.src);
  console.log(article?.author.profileImage);

  return (
    <main>
      <Header />
      <div className={styles.containerArticle}>
        {article ? (
          <>
            <CoverArticle src={article.image.src} alt={article.image.alt} />
            <p>{article.date}</p>

            <h1>{article.title}</h1>
            <h6>
              V.{article.volume}, N.{article.number}, {article.year} -{" "}
              {article.version}{" "}
            </h6>
            <p>{article.article}</p>
          </>
        ) : (
          <p>Article not found</p>
        )}
        <Box className={styles.containerArticleUser}>
          <div className={styles.imageProfile}>
            <Image
              src={article ? article?.author.profileImage : ""}
              alt="user"
              width={200}
              height={200}
              objectFit="cover"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <h3>{article?.author.author}</h3>
            <h5>{article?.author.descriptionAuthor}</h5>
            <p>{article?.author.apresentacaoCoAuthor}</p>
            <h6>Contato: {article?.author.emailAuthor}</h6>
          </div>
        </Box>
        {article?.author.coAuthor && (
          <Box className={styles.containerArticleUser}>
            <div className={styles.imageProfile}>
              <Image
                src={article?.author.profileImageCoAuthor}
                alt="user"
                width={200}
                height={200}
                objectFit="cover"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div>
              <h3>{article?.author.coAuthor}</h3>
              <h5>{article?.author.descriptionCoAuthor}</h5>
              <p>{article?.author.apresentacaoCoAuthor}</p>
              <h6>Contato: {article?.author.emailCoAuthor}</h6>
            </div>
          </Box>
        )}
        <HowToCite reference={article} />
      </div>
      <Footer />
    </main>
  );
}
