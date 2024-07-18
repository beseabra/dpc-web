"use client";
import { Box } from "@mui/material";
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
    <div>
      {infoslist.map((info, index) => (
        <Link
          key={index}
          href={info.link}
          style={{
            display: "flex",
            flexDirection: "row",
            cursor: "pointer",
            textDecoration: "none",
            color: "var(--text-color)",
            flexWrap: "wrap",
          }}
        >
          <Box
            style={{
              position: "relative",
              width: "100%",
              height: "8rem",
              overflow: "hidden",
            }}
          >
            <Image
              src={info.imgPath}
              alt="Picture of the author"
              objectFit="cover"
              className="center-image"
              layout="fill"
            />
          </Box>
          <div style={{ padding: "0.5rem" }}>
            <h1 style={{ fontSize: 18, height: "1.2rem", margin: "0.2rem" }}>
              {info.title}
            </h1>
            <h6
              style={{
                fontWeight: 500,
                margin: "0",
                fontSize: "14",
                textAlign: "justify",
              }}
            >
              {info.description}
            </h6>
          </div>
        </Link>
      ))}
    </div>
  );
}
