"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CustomEvent } from "../../organismo/SecondColumnBody/SecondColumnBody";

interface SideBarInfosProps {
  infoslist: CustomEvent[];
}

export default function SideBarInfos ({ infoslist }: SideBarInfosProps) {

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
            backgroundColor: "var(--quinary-color)",
            marginBottom: "1rem",
            height: "15rem",
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
              src={info.image}
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
                fontSize: "12px", 
                textAlign: "justify",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 4, 
                textOverflow: "ellipsis",
                lineHeight: "1.1rem", 
                marginTop: "0"
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
