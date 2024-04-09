import { z } from "zod";

// CRIAR
const create_user = z
  .object({
    name: z.string().min(1, "Campo obrigatório"),
    email: z
      .string()
      .min(1, "Campo obrigatório")
      .email("Digite um email válido"),
    role: z
      .string()
      .min(1, "Campo obrigatório")
      .transform((arg) => +arg),
    password: z.string().min(1, "Campo obrigatório"),
    confirm_password: z.string().min(1, "Campo obrigatório"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Senha não confere",
    path: ["confirm_password"],
  })
  .transform((data) => ({
    name: data.name,
    email: data.email,
    role: data.role,
    password: data.password,
    enable_cw: true,
  }));

// ATUALIZAR
const update_user = z
  .object({
    id: z.string().min(1, "Campo obrigatório"),
    name: z.string().min(1, "Campo obrigatório"),
    email: z
      .string()
      .min(1, "Campo obrigatório")
      .email("Digite um email válido"),
    role: z
      .string()
      .min(1, "Campo obrigatório")
      .transform((arg) => +arg),
    password: z.string(),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Senha não confere",
    path: ["confirm_password"],
  })
  .transform((data) => ({
    id: data.id,
    name: data.name,
    email: data.email,
    role: data.role,
    enable_cw: true,
    encrypted_password: data.password,
  }));

// DELETAR
const delete_user = z.object({
  id: z.string().min(1, "Campo obrigatório"),
});

// BUSCAR
const user = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  account_users: z.array(z.object({ role: z.number() })),
  updated_at: z
    .string()
    .transform((arg) => new Date(arg).toLocaleDateString("pt-br")),
});
const user_fetcher = z.object({
  data: z.array(user),
  meta: z.object({ totalItems: z.number() }),
});

export const schemas = {
  create_user,
  update_user,
  delete_user,
  user_fetcher,
};
