const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withLess({
    webpack(config, options) {
      // Fixes npm packages that depend on `fs` module
      if (!options.withLessisServer) {
        config.node = {
          fs: "empty",
          module: "empty"
        };
      }
      return config;
    }
  })
);
