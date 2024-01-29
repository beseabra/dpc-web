interface ArticleTitleProps {
  title: string;
}

export default function ArticleTitleDescription({ title }: ArticleTitleProps) {
  return <h3 style={{ height: "1rem" }}>{title}</h3>;
}
