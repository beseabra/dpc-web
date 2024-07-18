import { NextRequest, NextResponse } from "next/server";
import { destroySession } from "../service/authService";

export function GET(req: NextRequest) {
  destroySession();

  return NextResponse.redirect(new URL("/", req.url));
}
