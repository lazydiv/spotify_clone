import { getToken  } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    // token will exist if the user is logged in 
    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    
    const { pathname } = req.nextUrl;

    // allow the requests if the follwing is true..
    // if the token exist
    // or request for next-auth session & provider fetching

    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next();
    }

    // if they don't have a token and trying to get a protected route redirect them to login page

    if (!token && pathname !== '/login') {
        return NextResponse.redirect("/login");
    }

}