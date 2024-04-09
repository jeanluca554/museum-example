import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import { createUser } from "./functions";
import { authenticator } from "~/server/services";

export async function loaderController(args: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(args.request);
  return null;
}

export async function actionController(args: ActionFunctionArgs) {
  await authenticator.isAuthenticated(args.request);
  const formData = Object.fromEntries(await args.request.formData());

  switch (formData._action) {
    case "sign-up":
      return await createUser({ ...args, formData });
    default:
      return null;
  }
}
