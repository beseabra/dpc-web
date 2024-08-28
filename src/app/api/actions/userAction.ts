"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
}

export async function fetchUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user ? user : null;
}
