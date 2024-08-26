import EditIcon from "@mui/icons-material/Edit";
import styles from "./buttonEdit.module.css";
interface ButtonEditProps {
  onClick: () => void;
}

export default function ButtonEdit({ onClick }: ButtonEditProps) {
  return (
    <div className={styles.editButton} onClick={onClick}>
      <EditIcon fontSize="small" />
    </div>
  );
}
