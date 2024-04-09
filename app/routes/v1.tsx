import { type LoaderFunctionArgs } from "@remix-run/node";
import { V1Client } from "~/modules";
import { authenticator } from "~/server/services";

export async function loader(args: LoaderFunctionArgs) {
  const data = await authenticator.isAuthenticated(args.request);
  // const role = data.user.accounts[0].role as RoleType;

  return { ...data.user, account_id: data.account_id || "0" };
}

export default function () {
  return <V1Client.View />;
}
