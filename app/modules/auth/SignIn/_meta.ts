import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const meta = [];

  meta.push({ title: "Unitrinus | Conecte-se" });

  return meta;
};
