import type { LinksFunction } from "@remix-run/node";
import richTextCSS from "arkyn_rich_text/dist/main.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: richTextCSS },
];
