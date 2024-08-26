"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createSideBarInfo(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const link = formData.get("link") as string;
  const image = formData.get("image") as string;
  const type = formData.get("type") as string;

  const event = await prisma.event.create({
    data: {
      title,
      description,
      link,
      image,
      type,
      createdAt: "TEste",
      updatedAt: "TEste",
    },
  });

  return event;
}

export async function updateSideBarInfo(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const link = formData.get("link") as string;
  const image = formData.get("image") as string;
  const type = formData.get("type") as string;

  const updatedEvent = await prisma.event.update({
    where: { id },
    data: {
      title,
      description,
      link,
      image,
      type,
    },
  });

  return updatedEvent;
}
export async function getEventsByType(type: string) {
  const events = await prisma.event.findMany({
    where: { type },
  });
  return events;
}
