import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";

import arkynStyles from "arkyn_components/dist/style.css";
import arkynVariables from "~/client/config/index.css";
import tableCSS from "./_table.css";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "preconnect", href: "https://rsms.me/" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },
  { rel: "stylesheet", href: arkynStyles },
  { rel: "stylesheet", href: arkynVariables },
  { rel: "stylesheet", href: tableCSS },
  { rel: "stylesheet", href: stylesheet },
];
