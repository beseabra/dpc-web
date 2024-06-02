import EditIcon from "@mui/icons-material/Edit";
import styles from "./buttonEdit.module.css";

export default function ButtonEdit() {
  return (
    <div className={styles.editButton}>
      <EditIcon fontSize="small" />
    </div>
  );
}
