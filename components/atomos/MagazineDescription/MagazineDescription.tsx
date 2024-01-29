import Styles from "./magazineDescription.module.css";

interface ArticleTitleProps {
  description: string;
}

export default function MagazineDescription({
  description,
}: ArticleTitleProps) {
  return <p className={Styles.fontSize}>{description}</p>;
}
