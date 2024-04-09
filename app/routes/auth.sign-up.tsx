import { ErrorLimit } from "~/client/components";
import { SignUpClient, SignUpServer } from "~/modules";

export const action = SignUpServer.actionController;
export const loader = SignUpServer.loaderController;

export const ErrorBoundary = () => <ErrorLimit />;
export const meta = SignUpClient.meta;

export default function () {
  return <SignUpClient.View />;
}
