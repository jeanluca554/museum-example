import { useNavigation } from "@remix-run/react";
import { Button, Form, Input, Text } from "arkyn_components";
import type { CSSProperties } from "react";

import * as styles from "./styles.css";

export function SignInForm() {
  const { state } = useNavigation();
  const isLoading = state !== "idle";

  const forgotStyle: CSSProperties = {
    marginLeft: "auto",
  };

  const centerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  };

  return (
    <div className={styles.container}>
      <div>
        <Text as="h2" fontSize="xl" fontWeight="bold">
          Bem vindo(a)!
        </Text>
        <Text as="p">Faça seu login para acessar a plataforma</Text>
      </div>

      <Form.Container method="POST" className={styles.form_style}>
        <Form.Controller>
          <Input
            name="email"
            placeholder="meuemail@email.com"
            bg="var(--white)"
          />
          <Form.Error />
        </Form.Controller>

        <Form.Controller>
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            bg="var(--white)"
          />
          <Form.Error />
        </Form.Controller>

        <Text
          as="link"
          color="var(--blue-500)"
          fontWeight="semibold"
          fontSize="sm"
          to="/auth/forgot"
          style={forgotStyle}
        >
          Esqueceu sua senha?
        </Text>

        <Button name="_action" value="sign-in" isLoading={isLoading}>
          Entrar
        </Button>
      </Form.Container>

      <div style={centerStyle}>
        <Text as="p">Não possui uma conta?</Text>
        <Text
          as="link"
          color="var(--blue-500)"
          fontWeight="semibold"
          to="/auth/sign-up"
        >
          Clique aqui
        </Text>
      </div>
    </div>
  );
}
