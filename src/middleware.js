import { NextResponse } from "next/server";

export function middleware(request) {
  const dummyUserData = {
    role: "admin",
    email: "test@admin.com",
  };

  let isServicesPage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyUserData.role === "admin";

  if (isServicesPage && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// // 👇 Add the matcher to apply middleware only to /services routes
// export const config = {
//   matcher: ["/services/:path*"], // applies to /services and any nested paths
// };
