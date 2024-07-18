"use client";
import useArticles from "@/hooks/useArticles";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  ButtonGroup,
  InputAdornment,
  Pagination,
  TextField,
} from "@mui/material";
import { articlesPosts } from "../../list/articlesPosts/articlesPosts";
import ArticleListMagazine from "../../moleculas/ArticleListMagazine/ArticleListMagazine";
import styles from "./magazinePost.module.css";

export default function MagazinePosts() {
  const { articles, loading } = useArticles();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className={styles.filter}>
        <ButtonGroup variant="text" aria-label="text button group">
          {articlesPosts //atualizar para variavel vindo do banco
            .filter(
              (article, index, self) =>
                self.findIndex((a) => a.year === article.year) === index
            )
            .map((article, index) => (
              <Button key={index}>{article.year}</Button>
            ))}
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          {articlesPosts //atualizar para variavel vindo do banco
            .filter(
              (article, index, self) =>
                self.findIndex((a) => a.year === article.year) === index
            )
            .map((article, index) => (
              <Button key={index}>
                V.{article.volume}, N. {article.number}, {article.year}
              </Button>
            ))}
        </ButtonGroup>
        <div className={styles.inputSearch}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Pesquisar artigo"
          />
        </div>
      </div>
      <div>
        <ArticleListMagazine articlesPosts={articles} />
        <div className={styles.pagination}>
          <Pagination count={10} color="secondary" />
        </div>
      </div>
    </div>
  );
}
