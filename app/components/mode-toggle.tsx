import { Moon, Sun } from "lucide-react";
import { Theme, useTheme } from "remix-themes";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ModeToggle() {
  const [, setTheme] = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-6 w-10 border border-primary_gold-300 bg-white px-1 text-[10px] font-semibold text-primary_gold-900 focus-visible:ring-primary_gold-300 dark:border-none dark:border-primary_gold-500 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus-visible:ring-primary_gold-500"
        >
          <Sun className="h-3 w-3 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-3 w-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:border-neutral-700 dark:bg-neutral-700 dark:stroke-primary_gold-500 " />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-neutral-700 ">
        <DropdownMenuItem
          className="dark:text-neutral-200"
          onClick={() => setTheme(Theme.LIGHT)}
        >
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem
          className="dark:text-neutral-200"
          onClick={() => setTheme(Theme.DARK)}
        >
          Escuro
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
