import { Form, useMatches } from "@remix-run/react";
import { Divider, Icons } from "arkyn_components";

import type { User } from "~/client/types";
import { container, logout_button } from "./styles.css";
import { ModeToggle } from "~/components/mode-toggle";

export function NavigationFooter() {
  const matches = useMatches();
  const rootData = matches[0].data as User;

  return (
    <footer className={container}>
      <Divider />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ModeToggle />
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div>
            <strong>{rootData.user.name}</strong> <br />
            <small>{rootData.user.email}</small>
          </div>
        </div>

        <Form method="post" action="/api/signout">
          <button type="submit" className={logout_button}>
            <Icons.LogOut size={16} color="var(--indigo-500)" />
          </button>
        </Form>
      </div>
    </footer>
  );
}
