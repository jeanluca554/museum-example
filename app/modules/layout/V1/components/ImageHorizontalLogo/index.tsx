import { useTheme } from "remix-themes";

import HorizontalLogo from "~/client/assets/horizontal-logo-branco.svg";
import HorizontalLogoDark from "~/client/assets/horizontal-logo-dark.svg";

export default function HorizontalLogoImage() {
  const [theme] = useTheme();
  return (
    <>
      {theme === "light" && (
        <img
          src={HorizontalLogo}
          alt="logo-museum"
          className=" w-60 md:h-20 md:w-80 lg:w-96"
        />
      )}
      {theme === "dark" && (
        <img
          src={HorizontalLogoDark}
          alt="logo-museum"
          className="w-40 md:h-20 md:w-80 lg:w-96"
        />
      )}
    </>
  );
}
