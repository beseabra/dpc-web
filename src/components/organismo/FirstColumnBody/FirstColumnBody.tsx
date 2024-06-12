import Box from "@mui/material/Box";
import ArticlePostsHome from "../../moleculas/ArticlePostsHome/ArticlePostsHome";
import NewInfo from "../../moleculas/NewInfo/NewInfo";

export default function FirstColumn() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "1rem",
      }}
    >
      <NewInfo />

      <ArticlePostsHome />
    </Box>
  );
}
