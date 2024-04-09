import * as React from "react";
import { RichText } from "arkyn_rich_text";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const RichTextSunEditor2 = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, defaultValue, ...props }, ref) => {
    const [value, setValue] = React.useState(defaultValue?.toString() || "");

    return (
      <>
        <input type="hidden" value={value} ref={ref} {...props} />
        <RichText setContents={value} onChange={setValue} name={name} />
      </>
    );
  },
);
RichTextSunEditor2.displayName = "Input";

export { RichTextSunEditor2 };
