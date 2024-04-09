import type { HeaderProps } from "./types";

export function Header({ title, content }: HeaderProps) {
  return (
    <header className="flex justify-between items-center h-min">
      <h1 className="text-neutral-900 font-bold text-[1.75rem] w-full dark:text-neutral-50">
        {title}
      </h1>
      <div className="flex items-center">{content}</div>
    </header>
  );
}
