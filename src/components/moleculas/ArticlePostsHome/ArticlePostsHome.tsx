"use client";
import useArticles from "@/hooks/useArticles";
import { Box, CircularProgress } from "@mui/material";
import { useState } from "react";
import Pagination from "../../atomos/Pagination/Pagination";
import SearchComponent from "../../atomos/SearchComponent/SerchComponent";
import ArticleListMagazine from "../ArticleListMagazine/ArticleListMagazine";

function calculateTotalPages(totalItems: number, itemsPerPage: number) {
  return Math.ceil(totalItems / itemsPerPage);
}

export default function ArticlePostsHome() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  
  const { articles, loading } = useArticles();
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const itemsPerPage = 10;

  const totalItems = filteredArticles.length;
  const totalPages = calculateTotalPages(totalItems, itemsPerPage);


  if (loading) {
    return  <CircularProgress />;
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filtered = articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.article.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.authorId
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        article.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredArticles(filtered);
    setPage(1);
  };

  return (
    <Box>
      <SearchComponent
        page={page}
        setPage={setPage}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
      <ArticleListMagazine articlesPosts={articles} />
      <Pagination
        page={page}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </Box>
  );
}
