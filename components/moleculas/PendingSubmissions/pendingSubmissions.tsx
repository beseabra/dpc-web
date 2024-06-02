import MagazineTitle from "../../atomos/MagazineTitle/MagazineTitle";
import Button from "../../atomos/button/Button";
import styles from "./pendingSubmissions.module.css";
export default function PendingSubmissions() {
  function handleSubmit() {
    console.log("submit");
  }
  return (
    <>
      <MagazineTitle title="Submissões pendentes" />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <div>
          <h5 className={styles.margin}>titulo</h5>
          <h6 className={styles.margin}>Área de conhecimento: teste</h6>
          <h6 className={styles.margin}>Data do Envio: fdff</h6>
        </div>
        <div style={{ display: "flex", gap: 50 }}>
          <Button
            text="VISUALIZAR"
            color="var(--secondary-color)"
            onClick={handleSubmit}
          />
          <Button
            text="APROVAR"
            color="var(--quaternary-color)"
            onClick={handleSubmit}
          />
          <Button
            text="REPROVAR"
            color="var(--tertiary-color)"
            onClick={handleSubmit}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: " #7a7c8a",
          height: 0.5,
          width: "100%",
          borderRadius: 5,
          marginTop: 10,
        }}
      />
    </>
  );
}
