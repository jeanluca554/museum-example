import { redirect } from "@remix-run/node";
import { api, formControl, badRequest, getScopedParams } from "arkyn_utils";

import { user_schema } from "~/client/schemas";
import { authCookie } from "~/server/services";
import { schemas } from "../_schemas";
import { generateURL } from "~/server/utils";

type GetSessionProps = {
  request: Request;
  formData: { [x: string]: any };
};

export async function getSession(props: GetSessionProps) {
  const { formData, request } = props;
  const { sign_in: schema } = schemas;

  const validateFormData = formControl({ formData, schema });
  if (!validateFormData.success) return badRequest(validateFormData);

  const url = await generateURL("login", request);
  const { data } = validateFormData;

  const apiData = await api.POST({ data, url });
  if (!apiData.success) return badRequest(apiData);

  const { response } = apiData;
  console.log(response);
  // const validateApiData = formControl({
  //   formData: response,
  //   schema: user_schema,
  // });
  const validateApiData = user_schema.safeParse(response);
  console.log(validateApiData);

  if (!validateApiData.success) return badRequest(validateApiData);

  const { getSession, commitSession } = authCookie;
  const session = await getSession(request.headers.get("cookie"));

  const scopedParams = getScopedParams(request);
  const redirectURL = scopedParams.get("redirectURL") || "/v1/home";

  session.set("user_session", {
    ...validateApiData.data,
    account_id: validateApiData.data.user.accounts[0].account_id,
  });

  return redirect(redirectURL, {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}
