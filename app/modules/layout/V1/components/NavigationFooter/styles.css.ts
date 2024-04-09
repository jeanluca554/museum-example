import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const logout_button = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  width: "2rem",
  height: "2rem",
  transition: "all 0.2s",
  borderRadius: "0.375rem",

  ":hover": {
    background: "var(--slate-100)",
  },
});
