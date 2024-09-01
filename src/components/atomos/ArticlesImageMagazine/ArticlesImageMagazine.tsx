
import styles from "./ArticlesImageMagazine.module.css";
interface ArticleImageProps {
  src: string;
  alt: string;
}

export default function ArticlesImageMagazine({ src, alt }: ArticleImageProps) {
  return (
    <div
      className={styles.containerImage}
      aria-label={alt}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    ></div>
  );
}
