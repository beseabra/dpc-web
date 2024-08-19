"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createArticle(formData: {
  get: (arg0: string) => string;
}) {
  const title = formData.get("title");
  const subtitle = formData.get("subtitle");
  const articleContent = formData.get("article");
  const keywords = JSON.parse(formData.get("keywords"));
  const references = JSON.parse(formData.get("references"));
  const image = formData.get("image");
  const authorId = "96593c0c-ed7f-44a7-a128-e481011f1697";
  const coAuthors = formData.get("coAuthors")
    ? JSON.parse(formData.get("coAuthors"))
    : [];

  const article = await prisma.article.create({
    data: {
      title,
      subtitle,
      article: articleContent,
      keywords,
      references,
      image,
      authorId,
      coAuthors: {
        connect: coAuthors.map((coAuthor: { id: number }) => ({
          id: coAuthor.id,
        })),
      },
    },
  });
  return article;
}
