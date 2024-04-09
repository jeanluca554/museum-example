import { useTheme } from "remix-themes";

import logo from "~/client/assets/logo-sidebar.png";
import logoDark from "~/client/assets/logo-sidebar-dark.png";

export default function ImageLogo() {
  const [theme] = useTheme();
  return (
    <>
      {theme === "light" && (
        <img
          src={logo}
          style={{ margin: "0 auto", width: "138px", height: "30px" }}
          alt="logo-museum"
        />
      )}
      {theme === "dark" && (
        <img
          src={logoDark}
          style={{ margin: "0 auto", width: "138px", height: "30px" }}
          alt="logo-museum"
        />
      )}
    </>
  );
}
