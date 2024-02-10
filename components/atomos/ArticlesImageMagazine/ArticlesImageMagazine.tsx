interface ArticleImageProps {
  src: string;
  alt: string;
}

export default function ArticlesImageMagazine({ src, alt }: ArticleImageProps) {
  return (
    <div
      aria-label={alt}
      style={{
        width: "11rem",
        height: "7rem",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    ></div>
  );
}
