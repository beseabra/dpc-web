"use client";
import { getArticle } from "@/app/api/actions/articloAction";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, ButtonGroup, CircularProgress, InputAdornment, TextField } from "@mui/material";
import { Article } from "@prisma/client";
import { useEffect, useState } from "react";
import Pagination from "../../atomos/Pagination/Pagination";
import ArticleListMagazine from "../../moleculas/ArticleListMagazine/ArticleListMagazine";
import styles from "./magazinePost.module.css";

function calculateTotalPages(totalItems: number, itemsPerPage: number) {
  return Math.ceil(totalItems / itemsPerPage);
}

const getYearFromDate = (dateString: Date) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

export default function MagazinePosts() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      try {
        const fetchedArticles = await getArticle();
        setArticles(fetchedArticles || []);
        setFilteredArticles(fetchedArticles || []);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  useEffect(() => {
    if (!articles) return;

    const filtered = articles.filter((article) => {
      const matchesYear = selectedYear
        ? getYearFromDate(article.createdAt) === selectedYear
        : true;
      const matchesSearch = searchTerm
        ? article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      return matchesYear && matchesSearch;
    });

    setFilteredArticles(filtered);
    setPage(1);
  }, [articles, searchTerm, selectedYear]);

  const totalItems = filteredArticles.length;
  const totalPages = calculateTotalPages(totalItems, itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <CircularProgress />;
  }



  const uniqueYears = articles
    .map(article => getYearFromDate(article.createdAt))
    .filter((year, index, self) => self.indexOf(year) === index);

  return (
    <Box>
      <div className={styles.filter}>
        <ButtonGroup variant="text" aria-label="text button group">
          {Array.from(
            new Set(articles.map((article) => getYearFromDate(article.createdAt)))
          ).map((year) => (
            <Button key={year} onClick={() => setSelectedYear(year)}>
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
            value={searchTerm}
            onChange={handleSearchChange}
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
      {filteredArticles && (
        <ArticleListMagazine
          articlesPosts={filteredArticles.slice(
            (page - 1) * itemsPerPage,
            page * itemsPerPage
          )}
        />
      )}
      <div className={styles.pagination}>
        <Pagination
          page={page}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
        />
      </div>
    </Box>
  );
}
