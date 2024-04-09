import { CrudProvider } from "arkyn_components";

import { ErrorLimit } from "~/client/components";
import { CollectionClient, CollectionServer } from "~/modules";

export const action = CollectionServer.actionController;
export const loader = CollectionServer.loaderController;

export const ErrorBoundary = () => <ErrorLimit />;
export const meta = CollectionClient.meta;

export default function () {
  return (
    <CrudProvider>
      <CollectionClient.View />
    </CrudProvider>
  );
}
