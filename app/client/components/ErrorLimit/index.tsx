import { Button, Text } from "arkyn_components";

import bugError from "~/client/assets/bug-error.svg";
import * as styles from "./styles.css";

export function ErrorLimit() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={bugError} alt="BugErrorImage" className={styles.image} />

        <Text as="h2" fontWeight="semibold" fontSize="2xl">
          Parece que aconteceu algum erro
        </Text>

        <a
          href="mailto:lucasedugoncalves123@gmail.com"
          style={{ textDecoration: "none", marginTop: "1rem" }}
        >
          <Button>Entrar em contato</Button>
        </a>
      </div>
    </div>
  );
}
