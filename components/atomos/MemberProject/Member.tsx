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

export default function MemberProject({ collaborator }: MemberProps) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
      {collaborator.map((collab, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          key={index}
        >
          <Image
            src={collab.image.src}
            alt={collab.image.alt}
            width={125}
            height={125}
            layout="fixed"
            objectFit="cover"
            style={{ borderRadius: "50%" }}
          />

          <h5 className={styles.margin}>{collab.name}</h5>
        </div>
      ))}
    </div>
  );
}
