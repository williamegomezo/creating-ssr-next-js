const path = require("path");
const withSass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  webpack: config => {
    config.resolve.modules.push(path.resolve("./"));
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      loader: "svg-react-loader"
    });
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
