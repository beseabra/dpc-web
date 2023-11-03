interface ArticleTitleProps {
  description: string;
}

export default function ArticleDescription({ description }: ArticleTitleProps) {
  return <p style={{ fontSize: 12 }}>{description}</p>;
}
