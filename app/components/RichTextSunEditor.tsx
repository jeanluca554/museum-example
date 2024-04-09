import * as React from "react";
import SunEditor from "suneditor-react";
import katex from "katex";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const RichTextSunEditor = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, defaultValue, ...props }, ref) => {
    const [value, setValue] = React.useState(defaultValue?.toString() || "");

    return (
      <>
        {" "}
        <input type="hidden" value={value} ref={ref} {...props} />
        <SunEditor
          setContents={value}
          onChange={setValue}
          setOptions={{
            katex: katex,
            buttonList: [
              ["undo", "redo"],
              ["formatBlock"],
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
              ],
              ["fontColor", "hiliteColor"],
              ["align", "list"],
              ["outdent", "indent"],
              ["table", "horizontalRule", "link", "image", "video", "math"],
            ],
            defaultTag: "div",
            minHeight: "300px",
            showPathLabel: false,
          }}
        />
      </>
    );
  },
);
RichTextSunEditor.displayName = "Input";

export { RichTextSunEditor };
