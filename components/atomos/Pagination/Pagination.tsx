import { Box } from "@mui/material";
import style from "./pagination.module.css";

interface PaginationProps {
  page: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  handlePageChange,
}: PaginationProps) {
  return (
    <Box className={style.container}>
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            style={{
              backgroundColor:
                i + 1 === page
                  ? `${style.paginationButton} ${style.activePage}`
                  : style.paginationButton,
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
  );
}
