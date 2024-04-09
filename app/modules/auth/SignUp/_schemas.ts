import { regex } from "arkyn_utils";
import { z } from "zod";

const sign_up = z
  .object({
    name: z
      .string({ required_error: "Campo obrigatório" })
      .min(1, "Campo obrigatório"),
    phone: z
      .string({ required_error: "Campo obrigatório" })
      .min(1, "Campo obrigatório")
      .regex(regex.PHONE, "Telefone inválido")
      .transform((data) => {
        const newData = data
          .replaceAll("(", "")
          .replaceAll(")", "")
          .replaceAll("-", "")
          .replaceAll(" ", "");
        return "+55" + newData;
      }),
    cpf: z
      .string({ required_error: "E-mail obrigatório" })
      .min(1, "E-mail obrigatório")
      .regex(regex.CPF, "Deve ser um CPF")
      .transform((data) => data.replaceAll("-", "").replaceAll(".", "")),
    password: z
      .string({ required_error: "Senha obrigatória" })
      .min(8, "Minimo 8 caracteres"),
    confirm_password: z
      .string({ required_error: "Campo obrigatório" })
      .min(8, "Minimo 8 caracteres"),
  })
  .refine(
    (data) => {
      if (data.confirm_password !== data.password) return false;
      return true;
    },
    { message: "Os campos devem ser iguais", path: ["confirm_password"] }
  )
  .transform((data) => ({
    name: data.name,
    email: data.cpf + "@ciadosorriso.com.br",
    cpf: data.cpf,
    phone: data.phone,
    password: data.password,
  }));

export const schemas = { sign_up };
