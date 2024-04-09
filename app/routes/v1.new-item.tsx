import { CrudProvider } from "arkyn_components";

import { ErrorLimit } from "~/client/components";
import { NewItemClient, NewItemServer } from "~/modules";

export const action = NewItemServer.actionController;
export const loader = NewItemServer.loaderController;

export const ErrorBoundary = () => <ErrorLimit />;
export const meta = NewItemClient.meta;
export const links = NewItemClient.links;

export default function () {
  return (
    <CrudProvider>
      <NewItemClient.View />
    </CrudProvider>
  );
}
