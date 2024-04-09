// import { ModeToggle } from "~/components/mode-toggle";
import HorizontalLogoImage from "~/modules/layout/V1/components/ImageHorizontalLogo";

export function ViewHeader() {
  return (
    <div className="flex items-center justify-center py-3">
      <HorizontalLogoImage />
      {/* <div className="ml-4">
        <ModeToggle />
      </div> */}
    </div>
  );
}
