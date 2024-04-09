import { json } from "@remix-run/node";
import { badRequest, api, formControl } from "arkyn_utils";

import { generateURL } from "~/server/utils";
import { schemas } from "../_schemas";

type CreateProps = {
  token: string;
  account_id: string;
  request: Request;
  formData: { [key: string]: any };
};

export async function createUser(props: CreateProps) {
  const { account_id, formData, request, token } = props;
  const { create_user: schema } = schemas;

  const validateData = formControl({ schema, formData });
  if (!validateData.success) return badRequest(validateData);

  const data = {
    ...validateData.data,
    is_global: true,
  };

  const url = generateURL(`/${account_id}/user`, request);
  const apiResponse = await api.POST({ data, url, token });

  if (!apiResponse.success) return badRequest(apiResponse);
  return json({
    success: true,
    closeModal: true,
    message: "Criado com sucesso",
  });
}
