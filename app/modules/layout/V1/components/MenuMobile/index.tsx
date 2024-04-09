import { Home, ImagePlus, Menu, Settings } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import UserArea from "../UserArea";
import { NavMenu } from "./NavMenu";
import { Outlet } from "@remix-run/react";
import ImageLogo from "../ImageLogo";

export default function MenuMobile() {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center  gap-4 bg-neutral-100 px-4 dark:bg-neutral-900 md:hidden lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 bg-primary_gold-500 dark:bg-neutral-500 md:hidden"
            >
              <Menu className="h-5 w-5 stroke-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex w-72 flex-col">
            <ImageLogo />
            <nav className="mt-4 grid gap-2 text-lg font-medium">
              <NavMenu icon={Home} title="Início" to="home" />
              <NavMenu icon={ImagePlus} title="Adicionar Item" to="new-item" />
              <NavMenu icon={Settings} title="Configurações" to="settings" />
            </nav>
            <div className="mt-auto">
              <UserArea />
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex flex-1 flex-col gap-4 bg-neutral-100 dark:bg-neutral-900 lg:gap-6">
        <div className="flex h-screen flex-1 flex-col gap-8 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
