interface ArticleDateProps {
  date: Date;
}
export default function ArticleDateMagazine({ date }: ArticleDateProps) {
  return (
    <p style={{ fontSize: 14 }}>
      <i>
        {new Date(date).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </i>
    </p>
  );
}
