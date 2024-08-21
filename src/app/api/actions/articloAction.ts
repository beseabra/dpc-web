"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createArticle(formData: FormData) {
  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const articleContent = formData.get("article") as string;
  const authorId = "96593c0c-ed7f-44a7-a128-e481011f1697" as string;
  const image = formData.get("image") as string;

  
  const article = await prisma.article.create({
    data: {
      title,
      subtitle,
      article: articleContent,
      authorId,
      image,
     
    },
  });

  return article;
}
