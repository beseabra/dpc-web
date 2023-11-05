interface ArticleDateProps {
  date: string;
}
export default function ArticleDate({ date }: ArticleDateProps) {
  return (
    <p style={{ fontSize: 12 }}>
      <i> {date}</i>
    </p>
  );
}
