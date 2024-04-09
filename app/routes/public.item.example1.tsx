import { CrudProvider } from "arkyn_components";

import { ErrorLimit } from "~/client/components";
import { Example1Client, Example1Server } from "~/modules";

export const action = Example1Server.actionController;
export const loader = Example1Server.loaderController;

export const ErrorBoundary = () => <ErrorLimit />;
export const meta = Example1Client.meta;

export default function () {
  return (
    <CrudProvider>
      <Example1Client.View />
    </CrudProvider>
  );
}
