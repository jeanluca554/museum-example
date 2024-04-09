import {
  // FilterDrawer,
  // FilterZone,
  // DeleteModal,
  ViewBody,
  ViewHeader,
} from "./components";

export function View() {
  return (
    // <main className="flex flex-col gap-5 p-5  lg:p-8 xl:mx-auto xl:max-w-6xl">
    <main className="flex flex-col gap-5 p-5  lg:p-8">
      <ViewHeader />
      <ViewBody />
      {/* <FilterZone />
      <FormModal /> 
      <FilterDrawer />
      <DeleteModal />*/}
    </main>
  );
}
