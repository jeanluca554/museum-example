import type { ActionFunction } from "@remix-run/node";
import { authenticator } from "~/server/services/auth.server";

export const action: ActionFunction = async ({ request, params }) => {
  await authenticator.logout(request, { redirectTo: "/auth/sign-in" });
  return null;
};
