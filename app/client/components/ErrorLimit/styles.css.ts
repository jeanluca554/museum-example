import { style } from "@vanilla-extract/css";

export const container = style({
  margin: "1rem",
  flex: 1,
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: 8,
  height: "100%",
});

export const image = style({
  height: 300,
  paddingLeft: 32,
});
