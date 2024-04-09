import { ErrorLimit } from "~/client/components";
import { RootClient } from "~/modules";
import { authenticator } from "./server/services";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { themeSessionResolver } from "./sessions.server";
import { useLoaderData } from "@remix-run/react";
import { ThemeProvider } from "remix-themes";

export const meta = RootClient.meta;
export const links = RootClient.links;

export const ErrorBoundary = () => <ErrorLimit />;

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { user } = await authenticator.isAuthenticated(request);
  const { getTheme } = await themeSessionResolver(request);

  return {
    user,
    theme: getTheme(),
  };
};

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

export function App() {
  return <RootClient.View />;
}
