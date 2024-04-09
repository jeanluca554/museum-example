import { CrudProvider } from "arkyn_components";

import { ErrorLimit } from "~/client/components";
import { Example2Client, Example2Server } from "~/modules";

export const action = Example2Server.actionController;
export const loader = Example2Server.loaderController;

export const ErrorBoundary = () => <ErrorLimit />;
export const meta = Example2Client.meta;

export default function () {
  return (
    <CrudProvider>
      <Example2Client.View />
    </CrudProvider>
  );
}
