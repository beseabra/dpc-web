interface CoverArticleImageProps {
  src: string;
  alt: string;
}

export default function CoverArticle({ src, alt }: CoverArticleImageProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "14rem",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        borderRadius: "0.3rem",
      }}
    />
  );
}
