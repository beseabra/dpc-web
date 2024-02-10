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
  return (
    <div>
      <div className={styles.filter}>
        <ButtonGroup variant="text" aria-label="text button group">
          {articlesPosts
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
          {articlesPosts
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
        <ArticleListMagazine articlesPosts={articlesPosts} />
        <div className={styles.pagination}>
          <Pagination count={10} color="secondary" />
        </div>
      </div>
    </div>
  );
}
