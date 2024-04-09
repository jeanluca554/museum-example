import { useNavigation } from "@remix-run/react";
import { Button, Form, Input, MaskedInput, Text } from "arkyn_components";
import type { CSSProperties } from "react";

import * as styles from "./styles.css";

export function SignUpForm() {
  const { state } = useNavigation();
  const isLoading = state !== "idle";

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
          Faça seu Cadastro
        </Text>
        <Text as="p" lineHeight="5xl">
          Crie sua conta gratuita.
        </Text>
      </div>

      <Form.Container method="POST" className={styles.form_style}>
        <Form.Controller>
          <Input name="name" placeholder="Nome completo" bg="var(--white)" />
          <Form.Error />
        </Form.Controller>

        <Form.Controller>
          <MaskedInput
            mask="999.999.999-99"
            name="cpf"
            placeholder="CPF"
            bg="var(--white)"
          />
          <Form.Error />
        </Form.Controller>

        <Form.Controller>
          <MaskedInput
            mask="(99) 99999-9999"
            name="phone"
            placeholder="Telefone"
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

        <Form.Controller>
          <Input
            type="password"
            name="confirm_password"
            placeholder="Confirmar senha"
            bg="var(--white)"
          />
          <Form.Error />
        </Form.Controller>

        <Button name="_action" value="sign-up" isLoading={isLoading}>
          Criar
        </Button>
      </Form.Container>

      <div style={centerStyle}>
        <Text as="p">Já possui uma conta?</Text>
        <Text
          as="link"
          color="var(--blue-500)"
          fontWeight="semibold"
          to="/auth/sign-in"
        >
          Voltar para o login
        </Text>
      </div>
    </div>
  );
}
