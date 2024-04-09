import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetchers,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import clsx from "clsx";

import { ArkynProvider } from "arkyn_components";
import NProgress from "nprogress";
import { useEffect, useMemo } from "react";

import { arkynConfig } from "./_arkyn-config";
import type { loader } from "~/root";
import { PreventFlashOnWrongTheme, useTheme } from "remix-themes";

export function View() {
  const navigation = useNavigation();
  const fetchers = useFetchers();

  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  let state = useMemo<"idle" | "loading">(
    function getGlobalState() {
      let states = [
        navigation.state,
        ...fetchers.map((fetcher) => fetcher.state),
      ];
      if (states.every((state) => state === "idle")) return "idle";
      return "loading";
    },
    [navigation.state, fetchers],
  );

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    if (state === "loading") NProgress.start();
    if (state === "idle") NProgress.done();
  }, [state]);

  return (
    <html id="html" lang="pt-br" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
      </head>
      <body>
        <ArkynProvider {...arkynConfig}>
          <Outlet />
        </ArkynProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
