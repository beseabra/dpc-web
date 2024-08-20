"use server";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { createSessionToken } from "../service/authService";

const prisma = new PrismaClient();

export async function createAccount(formData: FormData) {
  const name = formData.get("name") as string;
  const lastName = formData.get("lastName") as string;
  const lattes = formData.get("lattes") as string;
  const phone = formData.get("phone") as string;
  const position = formData.get("position") as string;
  const formation = formData.get("formation") as string;
  const institution = formData.get("institution") as string;
  const image = formData.get("image") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordHash = await bcrypt.hash(password, 10);
  const typeUser = "admin";

  await prisma.user.create({
    data: {
      name,
      lastName,
      lattes,
      phone,
      position,
      formation,
      institution,
      image,
      email,
      password: passwordHash,
      typeUser,
    },
  });
  console.log("User created");
  redirect("/");
}

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    console.log("User not found");
    return;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    await createSessionToken({
      sub: user.id,
      email: user.email,
      name: user.name,
      type: user.typeUser,
    });
    redirect("/");
  } else {
    console.log("Password does not match");
  }
}
