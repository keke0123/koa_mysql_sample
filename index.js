/*
 * the only file of the project that will not be compiled by Babel
 * and that must use native module syntax (i.e. CommonJS).
 */

const port = process.env.PORT || 8000;
const env = process.env.NODE_ENV || "development";
const src = env === "production" ? "./build/app" : "./src/app";

require("babel-polyfill");
if (env === "development") {
  // for development use babel/register for faster runtime compilation
  require("babel-register");
}

(async () => {
  const os = require("os");

  const app = require(src).default;

  // 일단 db connect 만 하고 있음
  await app.init();

  let server = app.listen(port);
})();
