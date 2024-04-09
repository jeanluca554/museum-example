import { json } from "@remix-run/node";
import { badRequest, api, formControl } from "arkyn_utils";

import { generateURL } from "~/server/utils";
import { schemas } from "../_schemas";

type DeleteProps = {
  token: string;
  account_id: string;
  request: Request;
  formData: { [key: string]: any };
};

export async function deleteUser(props: DeleteProps) {
  const { account_id, formData, token, request } = props;
  const { delete_user: schema } = schemas;

  const validateData = formControl({ schema, formData });
  if (!validateData.success) return badRequest(validateData);

  const { id } = validateData.data;

  const url = generateURL(`/${account_id}/user/${id}`, request);
  const apiResponse = await api.DELETE({ url, token });

  if (!apiResponse.success) return badRequest(apiResponse);
  return json({
    success: true,
    closeModal: true,
    message: "Deletado com sucesso",
  });
}
