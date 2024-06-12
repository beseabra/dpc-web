interface ArticleTitleProps {
  title: string;
}

export default function ArticleTitle({ title }: ArticleTitleProps) {
  return <h1 style={{ height: "4rem" }}>{title}</h1>;
}
