import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Unitrinus",
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
    },
  ];
};
