"use client";
import { getArticle } from "@/app/api/actions/articloAction";
import { Box, CircularProgress } from "@mui/material";
import { Article } from "@prisma/client";
import { useEffect, useState } from "react";
import Pagination from "../../atomos/Pagination/Pagination";
import SearchComponent from "../../atomos/SearchComponent/SerchComponent";
import ArticleListMagazine from "../ArticleListMagazine/ArticleListMagazine";

function calculateTotalPages(totalItems: number, itemsPerPage: number) {
  return Math.ceil(totalItems / itemsPerPage);
}

export default function ArticlePostsHome() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      try {
        const fetchedArticles = await getArticle();
        setArticles(fetchedArticles);
        setFilteredArticles(fetchedArticles);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const totalItems = filteredArticles.length;
  const totalPages = calculateTotalPages(totalItems, itemsPerPage);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(value.toLowerCase()) ||
        article.article.toLowerCase().includes(value.toLowerCase()) ||
        article.authorId?.toLowerCase().includes(value.toLowerCase()) ||
        article.subtitle.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredArticles(filtered);
    setPage(1);
  };

  return (
    <Box
      sx={{
        padding: "16px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
      onClick={(event) => event.stopPropagation()} 
    >
      <SearchComponent
        page={page}
        setPage={setPage}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
      <ArticleListMagazine
        articlesPosts={filteredArticles.slice(
          (page - 1) * itemsPerPage,
          page * itemsPerPage
        )}
      />
      <Pagination
        page={page}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </Box>
  );
}
