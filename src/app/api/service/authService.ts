import * as jose from "jose";
import { cookies } from "next/headers";
interface UserPayload {
  sub: string;
  email: string;
  name: string;
  type: string;
  exp: number;
}

// Função para abrir e decodificar o token JWT
function isUserPayload(payload: any): payload is UserPayload {
  return (
    typeof payload.sub === "string" &&
    typeof payload.email === "string" &&
    typeof payload.name === "string" &&
    typeof payload.type === "string" &&
    typeof payload.exp === "number"
  );
}

export async function openSessionToken(token: string): Promise<UserPayload> {
  const secret = new TextEncoder().encode(process.env.AUTH_TOKEN);

  try {
    const { payload } = await jose.jwtVerify(token, secret);

    if (!isUserPayload(payload)) {
      throw new Error("Token inválido: Payload inesperado");
    }

    return payload;
  } catch (error) {
    console.error("Erro ao verificar o token:", error);
    throw new Error("Token inválido");
  }
}

export async function createSessionToken(payload = {}) {
  const secret = new TextEncoder().encode(process.env.AUTH_TOKEN);

  try {
    const session = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1d")
      .sign(secret);

    const { exp } = await openSessionToken(session);

    cookies().set("session", session, {
      expires: new Date((exp as number) * 1000),
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Adicione 'secure' para ambientes de produção
    });
  } catch (error) {
    console.error("Erro ao criar o token de sessão:", error);
  }
}

export async function isSessionValid() {
  const sessionCookie = cookies().get("session");

  if (sessionCookie) {
    const { value } = sessionCookie;

    try {
      const { exp } = await openSessionToken(value);
      const currentDate = Date.now();

      return (exp as number) * 1000 > currentDate;
    } catch (error) {
      console.error("Erro ao verificar a validade da sessão:", error);
    }
  }

  return false;
}

export function destroySession() {
  cookies().delete("session");
}
