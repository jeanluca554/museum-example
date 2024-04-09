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
const item = z.object({
  code: z.string().min(1, "Campo obrigatório"),
  name: z.string().min(1, "Campo nome é obrigatório"),
  description: z.string({ required_error: "A descrição é obrigatória" }),
  image: z.string({ required_error: "A imagem é obrigatória" }),
  audio: z.string().optional(),
  //qrcode_image: z.string(),
  //qrcode_link: z.string(),
});

const fetcher = z.object({
  data: z.array(item),
  meta: z.object({ totalItems: z.number() }),
});

export const schemas = {
  create_user,
  update_user,
  delete_user,
  fetcher,
  item,
};
