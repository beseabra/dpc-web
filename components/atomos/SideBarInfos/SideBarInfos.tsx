"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SideBarInfosProps {
  infoslist: {
    imgPath: string;
    title: string;
    description: string;
    link: string;
  }[];
}

export default function SideBarInfos({ infoslist }: SideBarInfosProps) {
  const router = useRouter();
  return (
    <>
      {infoslist.map((info, index) => (
        <Link
          href={info.link}
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            cursor: "pointer",
            textDecoration: "none",
            color: "black",
          }}
        >
          <Image
            src={info.imgPath}
            alt="Picture of the author"
            width={150}
            height={120}
            style={{ backgroundColor: "red", marginTop: "1rem" }}
          />
          <div style={{ padding: "1rem" }}>
            <h1 style={{ fontSize: 18, height: "1.2rem" }}>{info.title}</h1>
            <h6 style={{ fontWeight: 500, margin: " 0" }}>
              {info.description}
            </h6>
          </div>
        </Link>
      ))}
    </>
  );
}
