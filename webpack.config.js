const webpack = require("webpack");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer/"),
    util: require.resolve("util/"),
  }),
  (config) => {
    config.resolve.fallback = {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
      util: require.resolve("util/"),
      process: require.resolve("process/browser"), // Add this line
    };

    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser", // Add this line
      })
    );

    return config;
  }
);
