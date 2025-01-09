"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createArticle(formData: FormData) {
  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const articleContent = formData.get("article") as string;
  const authorId = "96593c0c-ed7f-44a7-a128-e481011f1697" as string;
  const image = formData.get("image") as string;

  const keywordsString = formData.get("keywords") as string;
  const keywords = keywordsString.split(",").map((keyword) => keyword.trim());

  const article = await prisma.article.create({
    data: {
      title,
      subtitle,
      article: articleContent,
      authorId,
      image,
      keywords,
    },
  });

  return article;
}

export async function updateArticle(articleId: string, formData: FormData) {
  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const articleContent = formData.get("article") as string;
  const image = formData.get("image") as string;

  const keywordsString = formData.get("keywords") as string;
  const keywords = keywordsString.split(",").map((keyword) => keyword.trim());

  const updatedArticle = await prisma.article.update({
    where: { id: articleId },
    data: {
      title,
      subtitle,
      article: articleContent,
      image,
      keywords,
    },
  });

  return updatedArticle;
}

export async function getArticle() {
  const articles = await prisma.article.findMany();
  return articles;
}

export async function getArticleById(articleId: string) {
  const article = await prisma.article.findUnique({
    where: { id: articleId },
    include: {
      author: true,
      coAuthors: true,
    },
  });

  return article;
}
