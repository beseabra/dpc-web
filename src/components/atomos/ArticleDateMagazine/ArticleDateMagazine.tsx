interface ArticleDateProps {
  date: string;
}
export default function ArticleDateMagazine({ date }: ArticleDateProps) {
  return (
    <p style={{ fontSize: 14 }}>
      <i> {date}</i>
    </p>
  );
}
