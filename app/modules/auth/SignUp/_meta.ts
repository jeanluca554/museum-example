import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const meta = [];

  meta.push({ title: "Unitrinus | Criar conta" });

  return meta;
};
