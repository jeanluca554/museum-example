import { NavLink, useLocation } from "@remix-run/react";
import type { LucideIcon } from "lucide-react";

type NavMenuProps = {
  to: string;
  icon: LucideIcon;
  title: string;
};

function compareCurrentPath(pathname: string, current: string) {
  if (pathname.includes(current)) return true;
  return false;
}

export function NavMenu(props: NavMenuProps) {
  const { icon: Icon, title, to } = props;
  const { pathname } = useLocation();

  const isActive = compareCurrentPath(pathname, to);

  return (
    <NavLink
      className={`mx-[-0.65rem] flex items-center gap-2 rounded-lg px-3 py-2 font-semibold text-base text-neutral-900 transition-all dark:text-neutral-300 ${
        isActive && "bg-neutral-100 dark:bg-neutral-700"
      }`}
      to={to}
    >
      <Icon className="h-6 w-6 stroke-primary_gold-500" />
      {title}
    </NavLink>
  );
}
