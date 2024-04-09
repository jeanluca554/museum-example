import { CrudProvider } from "arkyn_components";

import { Item } from "./components";

export function View() {
  return (
    <CrudProvider>
      <Item />
    </CrudProvider>
  );
}
