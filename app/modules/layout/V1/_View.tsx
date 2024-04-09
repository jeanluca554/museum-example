import MenuDesktop from "./components/MenuDesktop";
import MenuMobile from "./components/MenuMobile";

export function View() {
  return (
    <div className="grid min-h-screen w-full dark:bg-neutral-900 md:grid-cols-[280px_1fr] md:dark:bg-neutral-800">
      <MenuDesktop />
      <MenuMobile />
    </div>
  );
}
