import {
  json,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import { api } from "arkyn_utils";

import { authenticator } from "~/server/services";
import { createUser, deleteUser, fetcher, updateUser } from "./functions";

export async function loaderController(args: LoaderFunctionArgs) {
  const { request } = args;
  const { account_id, token } = await authenticator.isAuthenticated(request);
  if (!account_id) throw new Error("Account not found");
  return json(await fetcher({ account_id, token, request }));
}

export async function actionController(args: ActionFunctionArgs) {
  const { request } = args;
  const { account_id, token } = await authenticator.isAuthenticated(request);
  if (!account_id) throw new Error("Account not found");
  api.lruCache.clear();

  const { _action, ...formData } = Object.fromEntries(await request.formData());
  switch (_action) {
    case "create-user":
      return await createUser({ account_id, formData, request, token });
    case "delete-user":
      return await deleteUser({ account_id, formData, request, token });
    case "update-user":
      return await updateUser({ account_id, formData, request, token });
    default:
      return null;
  }
}
