"use server";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
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
  const typeUser = "user";

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
 
}

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { success: false, message: "Email e senha são obrigatórios." };
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return { success: false, message: "Usuário não encontrado." };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      await createSessionToken({
        sub: user.id,
        email: user.email,
        name: user.name,
        type: user.typeUser,
      });

      return { success: true };
    } else {
      return { success: false, message: "Senha incorreta." };
    }
  } catch (error) {
    console.error("Erro durante o login:", error);
    return { success: false, message: "Erro ao fazer login." };
  }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
}

export async function updateUser(formData: FormData) {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const lastName = formData.get("lastName") as string;
  const lattes = formData.get("lattes") as string;
  const phone = formData.get("phone") as string;
  const position = formData.get("position") as string;
  const formation = formData.get("formation") as string;
  const institution = formData.get("institution") as string;
  const image = formData.get("image") as string;
  const email = formData.get("email") as string;
  const typeUser = formData.get("typeUser") as string;

  try {
    await prisma.user.update({
      where: { id },
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
        typeUser,
      },
    });
    return { success: true, message: "Usuário atualizado com sucesso!" };
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return { success: false, message: "Erro ao atualizar usuário." };
  }
}