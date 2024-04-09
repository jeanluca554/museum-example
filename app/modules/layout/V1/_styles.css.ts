import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  height: "100vh",
  background: "var(--blue-50)",
});

export const sidebar_container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  height: "100vh",
  width: "280px",
  background: "#FFF",
  padding: "1rem",

  overflow: "auto",
});
