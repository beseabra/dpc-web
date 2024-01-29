interface ArticleImageProps {
  src: string;
  alt: string;
}

export default function ArticlesImageMagazine({ src, alt }: ArticleImageProps) {
  return (
    <div
      aria-label={alt}
      style={{
        width: "14rem",
        height: "10rem",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    ></div>
  );
}
