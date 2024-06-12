"use client";
import { Box } from "@mui/material";
import { useState } from "react";
import Pagination from "../../atomos/Pagination/Pagination";
import SearchComponent from "../../atomos/SearchComponent/SerchComponent";
import { articlesPosts } from "../../list/articlesPosts/articlesPosts";
import ArticleListMagazine from "../ArticleListMagazine/ArticleListMagazine";

function calculateTotalPages(totalItems: number, itemsPerPage: number) {
  return Math.ceil(totalItems / itemsPerPage);
}

export default function ArticlePostsHome() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articlesPosts);
  const itemsPerPage = 10;

  const totalItems = filteredArticles.length;
  const totalPages = calculateTotalPages(totalItems, itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filtered = articlesPosts.filter((article) => {
      return (
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.author
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        article.area.toLowerCase().includes(searchTerm.toLowerCase())
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
      <ArticleListMagazine articlesPosts={articlesPosts} />
      <Pagination
        page={page}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </Box>
  );
}
