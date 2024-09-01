import FirstColumn from "../../organismo/FirstColumnBody/FirstColumnBody";
import SecondColumn from "../../organismo/SecondColumnBody/SecondColumnBody";
import styles from "./BodyColumns.module.css";

export default function RecentNews() {
  return (
    <div className={styles.container}>
      <FirstColumn />
      <div className={styles.secondColumnHidden}>
        <SecondColumn />
      </div>
    </div>
  );
}
