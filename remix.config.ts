/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverModuleFormat: "esm",
  ignoredRouteFiles: ["**/.*"],
  browserNodeBuiltinsPolyfill: { modules: { https: true } },
  tailwind: true,
  postcss: true,
};
