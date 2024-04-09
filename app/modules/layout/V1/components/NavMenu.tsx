import { NavLink, useLocation } from "@remix-run/react";
import { menu_link } from "./styles.css";

type NavMenuProps = {
  to: string;
  icon: any;
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
      className={menu_link}
      to={to}
      style={{
        color: isActive ? "var(--blue-500)" : undefined,
        background: isActive ? "var(--blue-100)" : undefined,
      }}
    >
      <Icon
        color={isActive ? "var(--blue-500)" : "var(--zinc-500)"}
        size={24}
      />
      {title}
    </NavLink>
  );
}
