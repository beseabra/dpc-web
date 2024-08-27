'use server';
import { openSessionToken } from "@/app/api/service/authService";
import { cookies } from "next/headers";

export default async function sessionCookie() {
    let userPayload;

  const sessionCookie = cookies().get("session");
  if (sessionCookie) {
    try {
      userPayload = await openSessionToken(sessionCookie.value);
    } catch (error) {
      console.error("Erro ao obter o payload do usuário:", error);
    }
  }
    return userPayload;
}