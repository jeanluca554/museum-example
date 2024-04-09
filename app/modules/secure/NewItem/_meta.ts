import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const meta = [];
  meta.push({ title: "Museum | Adicionar Item" });
  return meta;
};
