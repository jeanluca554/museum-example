import { ViewContent } from "./ViewContent";
import { ViewHeader } from "./ViewHeader";

export function Item() {
  return (
    <div className=" bg-neutral-100 dark:bg-neutral-900">
      <div className="mx-auto flex w-full max-w-[640px] flex-col justify-center sm:max-w-4xl">
        <ViewHeader />
        <ViewContent />
      </div>
    </div>
  );
}
