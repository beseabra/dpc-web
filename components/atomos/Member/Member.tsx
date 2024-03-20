import Image from "next/image";
import styles from "./member.module.css";
interface Collaborator {
  name: string;
  function: string;
  lattes: string;
  email: string;
  image: {
    src: string;
    alt: string;
  };
}

interface MemberProps {
  collaborator: Collaborator[];
}

export default function Member({ collaborator }: MemberProps) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
      {collaborator.map((collab, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "25rem",
          }}
          key={index}
        >
          <Image
            src={collab.image.src}
            alt={collab.image.alt}
            width={125}
            height={125}
            objectFit="cover"
            style={{ borderRadius: "50%" }}
          />
          <div>
            <h5 className={styles.margin}>{collab.name}</h5>
            <h6 className={styles.margin}>{collab.function}</h6>
            <h6 className={styles.margin}>
              Lattes: <a href={collab.lattes}>{collab.lattes}</a>
            </h6>
            <h6 className={styles.margin}>Email: {collab.email}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}
