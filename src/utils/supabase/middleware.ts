import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

//Redirect logged in users away from these auth pages
const AUTH_ROUTES = ["/", "/login", "/signup", "/forgot-password"];
const PRIVATE_ROUTES = ["/boards", "/settings"];

function isAuthRoute(pathname: string) {
  return AUTH_ROUTES.some((route) => pathname === route);
}
function isPrivateRoute(pathname: string) {
  return PRIVATE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Do not run code between createServerClient and
  // supabase.auth.getUser().
  // IMPORTANT: DO NOT REMOVE auth.getUser()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // if user is not logged in, don't allow to visit private routes
 
  if (!user && isPrivateRoute(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (user && isAuthRoute(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/boards";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
