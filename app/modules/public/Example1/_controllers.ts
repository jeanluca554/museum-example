import {
  json,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "@remix-run/node";

import { fetcher } from "./functions";
import { authenticator } from "~/server/services";

export async function loaderController(args: LoaderFunctionArgs) {
  //const { request, params } = args;
  const { request, params } = args;
  //console.log(params);
  const item_id = params.id_item;
  //if (!item_id) return "id item does not exists";

  return json(await fetcher({ item_id, request }));
}

export async function actionController(args: ActionFunctionArgs) {
  await authenticator.isAuthenticated(args.request);
  // const formData = Object.fromEntries(await args.request.formData());

  // switch (formData._action) {
  //   case "sign-up":
  //     return await createUser({ ...args, formData });
  //   default:
  //     return null;
  // }
  return null;
}
