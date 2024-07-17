import { NextRequest, NextResponse } from "next/server";
import { isSessionValid } from "./app/api/service/authService";

const publicRouter = [
  "/",
  "/presentation",
  "/project",
  "/magazine",
  "/createUser",
  "/articles",
];

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
export async function middleware(req: NextRequest) {
  console.log("Middleware");

  const pathName = req.nextUrl.pathname;

  if (publicRouter.includes(pathName)) {
    console.log("Public route");

    return NextResponse.next();
  }

  const session = await isSessionValid();
  if (!session) {
    const isAPIRoute = pathName.startsWith("/api");

    if (isAPIRoute) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
