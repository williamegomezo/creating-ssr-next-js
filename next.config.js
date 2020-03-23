const path = require("path");
const withSass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  webpack: config => {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
};

module.exports = withPlugins(
  [
    [
      withSass,
      {
        cssModules: true
      }
    ]
  ],
  nextConfig
);
