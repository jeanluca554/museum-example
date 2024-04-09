import type { z } from "zod";
import type { user_schema } from "../schemas";

export type User = z.infer<typeof user_schema>;
