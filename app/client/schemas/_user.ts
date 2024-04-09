import { z } from "zod";

const account = z
  .object({
    id: z.number(),
    name: z.string(),
  })
  .transform((data) => ({
    name: data.name,
    user_id: data.id,
    account_id: data.id,
  }));

const user = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  updated_at: z.string(),
  // created_at: z.string(),
  accounts: z.array(account),
});

const token = z
  .object({ accessToken: z.string() })
  .transform((data) => data.accessToken);

const user_schema = z.object({
  token: token,
  user: user,
  account_id: z
    .string()
    .optional()
    .transform((data) => (data ? data : "")),
});

export { user_schema };
