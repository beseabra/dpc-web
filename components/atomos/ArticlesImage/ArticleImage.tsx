import Image from "next/image";

interface ArticleImageProps {
  src: string;
  alt: string;
}

export default function ArticleImage({ src, alt }: ArticleImageProps) {
  return <Image src={src} width={350} height={230} alt={alt} />;
}
