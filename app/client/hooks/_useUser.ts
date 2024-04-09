import { useMatches } from "@remix-run/react";
import type { loader } from "~/routes/v1";

export function useUser() {
  const userData = useMatches()[1].data as Awaited<ReturnType<typeof loader>>;
  return userData;
}
