import { Home, ImagePlus, Settings } from "lucide-react";
import { NavMenu } from "./NavMenu";

import UserArea from "../UserArea";
import ImageLogo from "../ImageLogo";

export default function MenuDesktop() {
  return (
    <div className="hidden border-r bg-white dark:border-r dark:border-neutral-700 dark:bg-neutral-800 md:block">
      <div className="fixed flex h-full max-h-screen flex-col gap-6 px-4 ">
        <div className="flex items-center border-b py-4 dark:border-neutral-700 lg:px-6 lg:py-5">
          <ImageLogo />
        </div>
        <div className="flex-1">
          <nav className="grid items-start gap-4 px-2 text-sm font-medium">
            <NavMenu icon={Home} title="Início" to="home" />
            <NavMenu icon={ImagePlus} title="Adicionar Item" to="new-item" />
            <NavMenu icon={Settings} title="Configurações" to="settings" />
          </nav>
        </div>
        <UserArea />
      </div>
    </div>
  );
}
