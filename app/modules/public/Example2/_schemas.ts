import { z } from "zod";

// BUSCAR
const item = z.object({
  code: z.string(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  audio: z.string(),
  qrcode_image: z.string(),
  qrcode_link: z.string(),
});

const fetcher = z.object({
  data: z.array(item),
  meta: z.object({ totalItems: z.number() }),
});

export const schemas = { fetcher, item };
