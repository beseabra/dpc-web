import { Box, MenuItem, Select, TextField } from "@mui/material";
import styles from "./searchComponent.module.css";

interface SearchComponentProps {
  page: number;
  setPage: (newPage: number) => void;
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchComponent({
  page,
  searchTerm,
  handleSearchChange,
}: SearchComponentProps) {
  return (
    <Box className={styles.searchComponent}>
      <TextField
        id="outlined-basic"
        label="Digite uma palavra chave/autor/tema"
        variant="outlined"
        style={{
          width: "100%",
          backgroundColor: "var(--text-color-secondary)",
        }}
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <Select
        value={page}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        style={{
          width: "100%",
          backgroundColor: "var(--text-color-secondary)",
          margin: "0",
          padding: "0",
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

      <Select
        value={page}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        style={{
          backgroundColor: "var(--text-color-secondary)",
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
    </Box>
  );
}
