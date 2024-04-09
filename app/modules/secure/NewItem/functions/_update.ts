import { json } from "@remix-run/node";
import { badRequest, api, formControl } from "arkyn_utils";

import { generateURL } from "~/server/utils";
import { schemas } from "../_schemas";

type UpdateProps = {
  token: string;
  account_id: string;
  request: Request;
  formData: { [key: string]: any };
};

export async function updateUser(props: UpdateProps) {
  const { account_id, formData, token, request } = props;
  const { update_user: schema } = schemas;

  const validateData = formControl({ schema, formData });
  if (!validateData.success) return badRequest(validateData);

  const { id, ...rest } = validateData.data;

  const data = {
    ...rest,
  };

  const url = generateURL(`/${account_id}/user/${id}`, request);
  const apiResponse = await api.PUT({ data, url, token });

  if (!apiResponse.success) return badRequest(apiResponse);
  return json({
    success: true,
    closeModal: true,
    message: "Atualizado com sucesso",
  });
}
