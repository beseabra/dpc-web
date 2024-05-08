import style from "./titleReferences.module.css";

interface TitleReferencesProps {
  title: string;
}

export default function TitleReferences({ title }: TitleReferencesProps) {
  return <div className={style.text}>{title}</div>;
}
