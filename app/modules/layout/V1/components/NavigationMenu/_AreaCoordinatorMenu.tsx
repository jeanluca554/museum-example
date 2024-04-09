import { Icons } from "arkyn_components";

import { NavMenu } from "../NavMenu";
import { container } from "./styles.css";

export function AreaCoordinatorMenu() {
  const { FileQuestion, Users2 } = Icons;

  return (
    <nav className={container}>
      <NavMenu to="/v1/users" icon={Users2} title="Usuários" />
      <NavMenu to="/v1/questions" icon={FileQuestion} title="Questões" />
    </nav>
  );
}
