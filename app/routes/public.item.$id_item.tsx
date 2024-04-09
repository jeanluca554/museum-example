import { CrudProvider } from "arkyn_components";

import { ErrorLimit } from "~/client/components";
import { ItemClient, ItemServer } from "~/modules";

export const action = ItemServer.actionController;
export const loader = ItemServer.loaderController;

export const ErrorBoundary = () => <ErrorLimit />;
export const meta = ItemClient.meta;

export default function () {
  return (
    <CrudProvider>
      <ItemClient.View />
    </CrudProvider>
  );
}
