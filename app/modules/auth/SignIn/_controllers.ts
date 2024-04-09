import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import { authenticator } from "~/server/services";
import { getSession } from "./functions";

export async function loaderController(args: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(args.request);
  return null;
}

export async function actionController(args: ActionFunctionArgs) {
  await authenticator.isAuthenticated(args.request);
  const formData = Object.fromEntries(await args.request.formData());

  switch (formData._action) {
    case "sign-in":
      return await getSession({ ...args, formData });
    default:
      return null;
  }
}
