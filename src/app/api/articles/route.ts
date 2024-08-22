import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  
  const articles = await prisma.article.findMany();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";

  const articlesById = await prisma.article.findUnique({
    where: {
      id: id,
    },
    include: {
      author: true,
      comments: true,
      coAuthors: true,
    },
  });

  return Response.json({ articles, articlesById });
}
