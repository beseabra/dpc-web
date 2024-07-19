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
  const pathName = req.nextUrl.pathname;

  if (publicRouter.includes(pathName)) {
    return NextResponse.next();
  }

  const session = await isSessionValid();
  if (!session) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
