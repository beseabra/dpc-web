import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const articles = await prisma.post.findMany();

  return Response.json({ articles });
}
