import { style } from "@vanilla-extract/css";

export const menu_link = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  textDecoration: "none",
  color: "var(--zinc-500)",
  padding: "0.5rem",
  borderRadius: "4px",

  ":hover": {
    background: "var(--blue-50)",
  },
});
