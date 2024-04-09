import { z } from "zod";

const sign_in = z.object({
  email: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, "Email obrigatório")
    .email("Deve ser um e-mail"),

  password: z
    .string({ required_error: "Senha obrigatória" })
    .min(1, "Senha obrigatória"),
});

export const schemas = { sign_in };
