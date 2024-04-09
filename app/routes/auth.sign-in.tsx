import { ErrorLimit } from "~/client/components";
import { SignInClient, SignInServer } from "~/modules";

export const action = SignInServer.actionController;
export const loader = SignInServer.loaderController;

export const ErrorBoundary = () => <ErrorLimit />;
export const meta = SignInClient.meta;

export default function () {
  return <SignInClient.View />;
}
