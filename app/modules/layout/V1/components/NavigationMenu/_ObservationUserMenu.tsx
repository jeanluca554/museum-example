import { Icons } from "arkyn_components";

import { NavMenu } from "../NavMenu";
import { container } from "./styles.css";

export function ObservationUserMenu() {
  const {
    Users2,
    FileQuestion,
    Type,
    Tags,
    Gauge,
    BookA,
    GraduationCap,
    BookOpenCheck,
    List,
  } = Icons;

  return (
    <nav className={container}>
      <NavMenu to="/v1/users" icon={Users2} title="Usuários" />
      <NavMenu to="/v1/questions" icon={FileQuestion} title="Questões" />
      <NavMenu to="/v1/question-types" icon={Type} title="Tipos de questão" />
      <NavMenu to="/v1/tags" icon={Tags} title="Tags" />
      <NavMenu to="/v1/levels" icon={Gauge} title="Níveis de dificuldade" />
      <NavMenu to="/v1/subjects" icon={BookA} title="Disciplinas" />
      <NavMenu to="/v1/series" icon={GraduationCap} title="Séries" />
      <NavMenu to="/v1/chapters" icon={BookOpenCheck} title="Capítulos" />
      <NavMenu to="/v1/topics" icon={List} title="Tópicos" />
    </nav>
  );
}
