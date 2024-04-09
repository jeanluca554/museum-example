import { keyframes, style } from "@vanilla-extract/css";

import background from "~/client/assets/background.png";
import signUp from "~/client/assets/sign-up.png";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  height: "100vh",
  width: "100vw",
  overflow: "hidden",

  background: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

const animation = keyframes({
  from: { opacity: 0, transform: "translateX(100px)" },
  to: { opacity: 1, transform: "translateX(0px)" },
});

export const content = style({
  display: "flex",
  flexDirection: "row",
  animation: `${animation} 0.5s ease-in-out`,
  filter: "drop-shadow(10px 10px 40px rgba(0, 0, 0, 0.25))",

  background: "var(--slate-50)",
  borderRadius: "20px",
  overflow: "hidden",
});

export const hero = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: 32,
  minHeight: 560,
  flex: 1,
  width: 550,

  backgroundImage: `
    linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.1) ),
    url(${signUp})
  `,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

export const form_container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  background: "var(--slate-100)",
  width: 415,
  padding: "58px 38px",
});
