"use client";
import useArticles from "@/hooks/useArticles";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  ButtonGroup,
  CircularProgress,
  InputAdornment,
  Pagination,
  TextField,
} from "@mui/material";
import { useState } from "react";
import ArticleListMagazine from "../../moleculas/ArticleListMagazine/ArticleListMagazine";
import styles from "./magazinePost.module.css";

const getYearFromDate = (dateString: Date) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

export default function MagazinePosts() {
  const { articles, loading } = useArticles();
  const [selectedYear, setSelectedYear] = useState<number | null>(null); 

  if (loading) {
    return <CircularProgress />;
  }

  const filteredArticles = selectedYear
    ? articles.filter(article => getYearFromDate(article.createdAt) === selectedYear)
    : articles;

  const uniqueYears = articles
    .map(article => getYearFromDate(article.createdAt))
    .filter((year, index, self) => self.indexOf(year) === index);

  return (
    <div>
      <div className={styles.filter}>
        <ButtonGroup variant="text" aria-label="text button group">
          {uniqueYears.map(year => (
            <Button
              key={year}
              onClick={() => setSelectedYear(year)} 
            >
              {year}
            </Button>
          ))}
          <Button onClick={() => setSelectedYear(null)}>Todos</Button> 
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          {uniqueYears.map(year => (
            <Button key={year}>
              V.XX, N. XX, {year}
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
        <ArticleListMagazine articlesPosts={filteredArticles} /> 
        <div className={styles.pagination}>
          <Pagination count={10} color="secondary" />
        </div>
      </div>
    </div>
  );
}
