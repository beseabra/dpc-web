import { Box, Grid, MenuItem, Select, TextField } from "@mui/material";

const articlesPosts = [
  {
    id: 1,
    title: "Titulo artigo Quimica",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore eum omnis vero dolore reiciendis, quidem sed consequuntur et, nisi ducimus recusandae quisquam ab doloribus ad natus velit pariatur. Iusto.",
    date: "Quarta-feira, 09 de Agosto 2023",
    image: { src: "/ps.png", alt: "Picture of the author" },
  },
  {
    id: 2,
    title: "Titulo artigo Matematica",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore eum omnis vero dolore reiciendis, quidem sed consequuntur et, nisi ducimus recusandae quisquam ab doloribus ad natus velit pariatur. Iusto.",
    date: "Quarta-feira, 09 de Agosto 2023",
    image: { src: "/ps.png", alt: "Picture of the author" },
  },
  {
    id: 3,
    title: "Titulo artigo Fisica",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore eum omnis vero dolore reiciendis, quidem sed consequuntur et, nisi ducimus recusandae quisquam ab doloribus ad natus velit pariatur. Iusto.",
    date: "Quarta-feira, 09 de Agosto 2023",
    image: { src: "/ps.png", alt: "Picture of the author" },
  },
  {
    id: 4,
    title: "Titulo artigo Biologia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore eum omnis vero dolore reiciendis, quidem sed consequuntur et, nisi ducimus recusandae quisquam ab doloribus ad natus velit pariatur. Iusto.",
    date: "Quarta-feira, 09 de Agosto 2023",
    image: { src: "/ps.png", alt: "Picture of the author" },
  },
  {
    id: 5,
    title: "Titulo artigo Geografia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore eum omnis vero dolore reiciendis, quidem sed consequuntur et, nisi ducimus recusandae quisquam ab doloribus ad natus velit pariatur. Iusto.",
    date: "Quarta-feira, 09 de Agosto 2023",
    image: { src: "/ps.png", alt: "Picture of the author" },
  },
  {
    id: 6,
    title: "Titulo artigo Historia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore eum omnis vero dolore reiciendis, quidem sed consequuntur et, nisi ducimus recusandae quisquam ab doloribus ad natus velit pariatur. Iusto.",
    date: "Quarta-feira, 09 de Agosto 2023",
    image: { src: "/ps.png", alt: "Picture of the author" },
  },
];

export default function ArticlePostsHome() {
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
          md={8}
          lg={6}
          xl={8}
          style={{ padding: "1rem 0" }}
        >
          <TextField
            id="outlined-basic"
            label="Digite uma palavra chave/autor/tema"
            variant="outlined"
            style={{ width: "100%", backgroundColor: "white" }}
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
    </Box>
  );
}
