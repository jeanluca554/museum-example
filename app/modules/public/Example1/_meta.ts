import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const meta = [];

  meta.push({ title: "Museum | Obra" });
  meta.push({ charset: "utf-8" });

  return meta;
};
