import { getToken } from "next-auth/jwt";
import { NextResponse} from "next/server";

export async function middleware(req) {
  const token = await getToken({req, secret: process.env.SECRET, encryption: true})
  const { pathname} = req.nextUrl;
  
  // permite req se é for uma req para o next-auth ou o token for existente
  
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }
  
  if (!token && pathname !=="/login") {
    console.log('not logged');
    return NextResponse.redirect("/login")
  }
}