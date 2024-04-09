import { Icons } from "arkyn_components";

import { NavMenu } from "../NavMenu";
import { container } from "./styles.css";

export function TeatcherMenu() {
  const { Home } = Icons;

  return (
    <nav className={container}>
      <NavMenu icon={Home} to="/v1/lists" title="Minhas Listas" />
    </nav>
  );
}
