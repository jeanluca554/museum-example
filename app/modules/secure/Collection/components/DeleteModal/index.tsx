import { Button, Form, Modal, Text, useCrud } from "arkyn_components";
import * as styles from "./styles.css";
import { useNavigation } from "@remix-run/react";

export function DeleteModal() {
  const { state } = useNavigation();
  const { modal, closeModal } = useCrud();

  const modalIsOpen = modal?.type === "delete";

  return (
    <Modal.Container isVisible={modalIsOpen} makeInvisible={closeModal}>
      <Modal.Header>
        <Text as="h1" fontSize="xl" fontWeight="bold">
          Deletar
        </Text>
      </Modal.Header>

      <Form.Container method="POST">
        <div className={styles.container}>
          <Text as="p">Você deseja deletar este usuário?</Text>
          <input type="hidden" name="id" value={modal?.data?.id} />
        </div>

        <Modal.Footer>
          <Button type="button" onClick={closeModal} variant="simple">
            Cancelar
          </Button>
          <Button
            isLoading={state !== "idle"}
            name="_action"
            value="delete-user"
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Form.Container>
    </Modal.Container>
  );
}
