interface MagazineTitleProps {
  title: string;
}

export default function MagazineTitle({ title }: MagazineTitleProps) {
  return <h2>{title}</h2>;
}
