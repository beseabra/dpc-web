interface ArticleTitleProps {
  title: string;
}

export default function ArticleTitleDescription({ title }: ArticleTitleProps) {
  return <h3 style={{ height: "2rem", width: "10rem" }}>{title}</h3>;
}
