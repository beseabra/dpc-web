import Box from "@mui/material/Box";
import FirstColumn from "../../organismo/FirstColumnBody/FirstColumnBody";
import SecondColumn from "../../organismo/SecondColumnBody/SecondColumnBody";

export default function RecentNews() {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        margin: "1rem 6rem 0 6rem",
      }}
    >
      <FirstColumn />
      <SecondColumn />
    </Box>
  );
}
