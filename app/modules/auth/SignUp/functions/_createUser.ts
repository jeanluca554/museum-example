import { api, formControl, badRequest } from "arkyn_utils";

import { user_schema } from "~/client/schemas";
import { schemas } from "../_schemas";
import { authCookie } from "~/server/services";
import { json } from "@remix-run/node";

type CreateProps = {
  request: Request;
  formData: { [x: string]: any };
};

export async function createUser(props: CreateProps) {
  const { formData, request } = props;
  const { sign_up: schema } = schemas;

  const validateFormData = formControl({ formData, schema });
  if (!validateFormData.success) return badRequest(validateFormData);

  const url = process.env.BASE_API_URL + "/register-app";
  const { data } = validateFormData;

  const apiData = await api.POST({ data, url });
  if (!apiData.success) return badRequest(apiData);

  const { response } = apiData;
  const validateApiData = formControl({
    formData: response,
    schema: user_schema,
  });

  if (!validateApiData.success) return badRequest(apiData);

  const { getSession, commitSession } = authCookie;
  const session = await getSession(request.headers.get("cookie"));

  session.set("user_session", validateApiData.data);

  return json(
    { success: true, message: "Login concluido com sucesso" },
    { headers: { "Set-Cookie": await commitSession(session) } }
  );
}
