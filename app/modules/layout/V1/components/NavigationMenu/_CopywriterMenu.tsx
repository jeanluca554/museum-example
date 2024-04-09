import { Icons } from "arkyn_components";

import { NavMenu } from "../NavMenu";
import { container } from "./styles.css";

export function CopywriterMenu() {
  const { FileQuestion } = Icons;

  return (
    <nav className={container}>
      <NavMenu icon={FileQuestion} to="/v1/questions" title="Minhas Questões" />
    </nav>
  );
}
