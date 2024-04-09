import { useTheme } from "remix-themes";

import HorizontalLogo from "~/client/assets/horizontal-logo.svg";
import HorizontalLogoDark from "~/client/assets/horizontal-logo-dark.svg";

export default function HorizontalLogoImage() {
  const [theme] = useTheme();
  return (
    <>
      {theme === "light" && (
        <img
          src={HorizontalLogo}
          alt="logo-museum"
          className="sm:h-10 sm:w-40 md:h-14 md:w-52"
        />
      )}
      {theme === "dark" && (
        <img
          src={HorizontalLogoDark}
          alt="logo-museum"
          className="sm:h-10 sm:w-40 md:h-14 md:w-52"
        />
      )}
    </>
  );
}
