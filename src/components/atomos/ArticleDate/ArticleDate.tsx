interface ArticleDateProps {
  date: string;
}
export default function ArticleDate({ date }: ArticleDateProps) {
  return (
    <p style={{ fontSize: 20 }}>
      <i> {date}</i>
    </p>
  );
}
