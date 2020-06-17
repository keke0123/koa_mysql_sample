import dev from "./dev";

export default (() => {
  let config = null;
  if (!config) {
    switch (process.env.NODE_ENV || "dev") {
      default:
        config = dev;
        break;
    }
  }
  // console.log("config", config);
  return config;
})();
