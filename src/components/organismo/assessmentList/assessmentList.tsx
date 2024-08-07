import ApprovedSubmissions from "../../moleculas/ApprovedSubmissions/approvedSubmissions";
import PendingSubmissions from "../../moleculas/PendingSubmissions/pendingSubmissions";
import styles from "./assessmentList.module.css";

export default function AssessmentList() {
  return (
    <div className={styles.container}>
      <PendingSubmissions />
      <ApprovedSubmissions />
    </div>
  );
}
