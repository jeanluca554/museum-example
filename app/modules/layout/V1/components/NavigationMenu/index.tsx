import { useMatches } from "@remix-run/react";
import type { User } from "~/client/types";

import { AdminMenu } from "./_AdminMenu";
import { AreaCoordinatorMenu } from "./_AreaCoordinatorMenu";
import { CopywriterMenu } from "./_CopywriterMenu";
import { ObservationUserMenu } from "./_ObservationUserMenu";
import { TeatcherMenu } from "./_TeatcherMenu";

export function NavigationMenu() {
  const matches = useMatches();
  const rootData = matches[0].data as User;
  const currentRole = rootData.user.accounts[0].role;

  // Admin
  if (currentRole === 0) return <AdminMenu />;
  // Copywriter
  if (currentRole === 1) return <CopywriterMenu />;
  // Teatcher
  if (currentRole === 2) return <TeatcherMenu />;
  // Area Coordinator
  if (currentRole === 3) return <AreaCoordinatorMenu />;
  // Observation User
  if (currentRole === 4) return <ObservationUserMenu />;

  return (
    <strong style={{ color: "var(--red-500)" }}>
      {currentRole} not exists
    </strong>
  );
}
