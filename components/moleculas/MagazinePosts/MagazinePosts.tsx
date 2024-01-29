import { Button, ButtonGroup } from "@mui/material";
import styles from "./magazinePost.module.css";

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
    volume: "1",
    number: "1",
    year: "2023",
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
    volume: "2",
    number: "1",
    year: "2021",
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
    volume: "3",
    number: "1",
    year: "2023",
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
    volume: "4",
    number: "1",
    year: "2021",
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
    volume: "5",
    number: "1",
    year: "2022",
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
    volume: "6",
    number: "1",
    year: "2021",
  },
];

export default function MagazinePosts() {
  return (
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
    </div>
  );
}
