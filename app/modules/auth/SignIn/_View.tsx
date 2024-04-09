import { CrudProvider } from "arkyn_components";
import logoIMG from "~/client/assets/logo.png";

import * as styles from "./_styles.css";
import { SignInForm } from "./components";

export function View() {
  return (
    <CrudProvider>
      <main className={styles.container}>
        <section className={styles.content}>
          <div className={styles.hero}>
            <img width={130} src={logoIMG} alt="Cia_Do_Sorriso" />
          </div>
          <div className={styles.form_container}>
            <SignInForm />
          </div>
        </section>
      </main>
    </CrudProvider>
  );
}
