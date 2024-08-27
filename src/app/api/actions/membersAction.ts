"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createMember(formdata: FormData) {
  const image = formdata.get("image") as string;
  const name = formdata.get("name") as string;
  const lattes = formdata.get("lattes") as string;
  const email = formdata.get("email") as string;
  const type = formdata.get("type") as string;

  const member = await prisma.member.create({
    data: {
      image,
      name,
      lattes,
      email,
      type,
    },
  });

  return member;
}

export async function updateMember(id: string, formdata: FormData) {
  const image = formdata.get("image") as string;
  const name = formdata.get("name") as string;
  const lattes = formdata.get("lattes") as string;
  const email = formdata.get("email") as string;
  const type = formdata.get("type") as string;

  const updatedMember = await prisma.member.update({
    where: { id },
    data: {
      image,
      name,
      lattes,
      email,
      type,
    },
  });

  return updatedMember;
}

export async function getMembersByType(type: string) {
  const members = await prisma.member.findMany({
    where: { type },
  });
  return members;
}

export async function deleteMember(id: string) {
  const member = await prisma.member.delete({
    where: { id },
  });
  return member;
}

export async function getMembers() {
  const members = await prisma.member.findMany();
  return members;
}
