"use client";
import { Box, Grid, MenuItem, Select, TextField } from "@mui/material";
import ArticleDate from "../../atomos/ArticleDate/ArticleDate";
import ArticleTitle from "../../atomos/ArticleTitle/ArticleTitle";
import ArticleImage from "../../atomos/ArticlesImage/ArticleImage";
import ArticleDescription from "../../atomos/ArticleDescription/ArticleDescription";
import { useState } from "react";

const articlesPosts = [
  {
    id: 1,
    title: "Titulo artigo Quimica",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore eum omnis vero dolore reiciendis, quidem sed consequuntur et, nisi ducimus recusandae quisquam ab doloribus ad natus velit pariatur. Iusto.",
    date: "Quarta-feira, 09 de Agosto 2023",
    image: { src: "/ps.png", alt: "Picture of the author" },
    writer: "Autor1",
    area: "Quimica",
  },
  {
    id: 2,
    title: "Titulo artigo Matematica",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore eum omnis vero dolore reiciendis, quidem sed consequuntur et, nisi ducimus recusandae quisquam ab doloribus ad natus velit pariatur. Iusto.",
    date: "Quarta-feira, 09 de Agosto 2023",
    image: { src: "/image3.png", alt: "Picture of the author" },
    writer: "Bernardo",
    area: "Matematica",
  },
  {
    id: 3,
    title: "Titulo artigo Fisica",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore eum omnis vero dolore reiciendis, quidem sed consequuntur et, nisi ducimus recusandae quisquam ab doloribus ad natus velit pariatur. Iusto.",
    date: "Quarta-feira, 09 de Agosto 2023",
    image: { src: "/ps.png", alt: "Picture of the author" },
    writer: "diego",
    area: "Fisica",
  },
  {
    id: 4,
    title: "Titulo artigo Biologia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore eum omnis vero dolore reiciendis, quidem sed consequuntur et, nisi ducimus recusandae quisquam ab doloribus ad natus velit pariatur. Iusto.",
    date: "Quarta-feira, 09 de Agosto 2023",
    image: { src: "/ps.png", alt: "Picture of the author" },
    writer: "Pedro",
    area: "Biologia",
  },
  {
    id: 5,
    title: "Titulo artigo Geografia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore eum omnis vero dolore reiciendis, quidem sed consequuntur et, nisi ducimus recusandae quisquam ab doloribus ad natus velit pariatur. Iusto.",
    date: "Quarta-feira, 09 de Agosto 2023",
    image: { src: "/ps.png", alt: "Picture of the author" },
    writer: "joao",
    area: "Geografia",
  },
  {
    id: 6,
    title: "Titulo artigo Historia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore eum omnis vero dolore reiciendis, quidem sed consequuntur et, nisi ducimus recusandae quisquam ab doloribus ad natus velit pariatur. Iusto.",
    date: "Quarta-feira, 09 de Agosto 2023",
    image: { src: "/ps.png", alt: "Picture of the author" },
    Writer: "maria",
    area: "Historia",
  },
];

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  image: { src: string; alt: string };
  writer: string;
  area: string;
}

function calculateTotalPages(totalItems: number, itemsPerPage: number) {
  return Math.ceil(totalItems / itemsPerPage);
}

export default function ArticlePostsHome() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articlesPosts);
  const itemsPerPage = 4;

  const totalItems = filteredArticles.length;
  const totalPages = calculateTotalPages(totalItems, itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

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
        article.writer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.area.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredArticles(filtered);
    setPage(1);
  };

  return (
    <Box>
      <Grid
        container
        spacing={2}
        style={{
          marginTop: "0.1rem",
          marginLeft: "0.03rem",
          paddingRight: "1rem",
        }}
      >
        <Grid
          item
          xs={10}
          sm={8}
          md={6}
          lg={6}
          xl={8}
          style={{ padding: "1rem 0" }}
        >
          <TextField
            id="outlined-basic"
            label="Digite uma palavra chave/autor/tema"
            variant="outlined"
            style={{ width: "100%", backgroundColor: "white" }}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid
          item
          xs={7}
          sm={4}
          md={4}
          lg={3}
          xl={4}
          style={{ padding: "1rem 0" }}
        >
          <Select
            value={"age"}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            style={{
              width: "100%",
              backgroundColor: "white",
              margin: "0",
              padding: "0",
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid
          item
          xs={7}
          sm={4}
          md={4}
          lg={3}
          xl={4}
          style={{ padding: "1rem 0" }}
        >
          <Select
            value={"age"}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            style={{
              backgroundColor: "white",
              width: "100%",
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        gap={1}
        ml={1}
        xs={7}
        sm={10}
        md={12}
        lg={12}
        xl={12}
      >
        {paginatedArticles.map((article, index) => (
          <div key={index} style={{ width: "49%", overflow: "hidden" }}>
            <ArticleDate date={article.date} />
            <ArticleTitle title={article.title} />
            <ArticleImage src={article.image.src} alt={article.image.alt} />
            <ArticleDescription description={article.description} />
          </div>
        ))}
      </Grid>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              style={{
                backgroundColor: i + 1 === page ? "lightblue" : "white",
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div>
          {page > 1 && (
            <button onClick={() => handlePageChange(page - 1)}>Anterior</button>
          )}
          {page < totalPages && (
            <button onClick={() => handlePageChange(page + 1)}>Próxima</button>
          )}
        </div>
      </Box>
    </Box>
  );
}
