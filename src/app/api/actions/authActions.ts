"use server";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function createAccount(formData: FormData) {
  console.log(formData);

  try {
    const name = formData.get("name") as string;
    const lastName = formData.get("lastName") as string;
    const lattes = formData.get("lattes") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const formation = formData.get("formation") as string;
    const image = formData.get("image") as string;
    const institution = formData.get("institution") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const passwordHash = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        lastName,
        lattes,
        phone,
        position,
        formation,
        image,
        institution,
        email,
        password: passwordHash,
      },
    });
    console.log("User created");

    redirect("/");
  } catch (error) {
    console.error(error);
  }
}
