import { createCookieSessionStorage } from "@remix-run/node";
import { Authenticator } from "arkyn_utils";
import type { User } from "~/client/types";

const notLoggedRoutes = ["/auth/sign-in", "/auth/sign-up", "/auth/forgot"];

const authCookie = createCookieSessionStorage({
  cookie: {
    name: "remix:user__session",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1B0ok"],
    secure: false,
  },
});

const authenticator = new Authenticator<User, User>(authCookie, (props) => {
  const url = new URL(props.request.url);
  const pathname = url.pathname;

  if (props.isSuccess === true) {
    return props.user;
  }

  if (props.isSuccess === false) {
    const notLoggedRoute = notLoggedRoutes.includes(pathname);
    const publicRoute = pathname.includes("public/item");
    const redirectURL = `/auth/sign-in?redirectURL=${pathname}`;
    if (!notLoggedRoute && !publicRoute) props.redirect(redirectURL);
  }

  return {} as User;
});

export { authenticator, authCookie };
