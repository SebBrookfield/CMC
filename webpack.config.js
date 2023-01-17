const path = require("path");

module.exports = {
  mode: "production",
  cache: true,
  target: "node",
  entry: {
    persistenceHandler: "./src/handlers/persistenceHandler.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  resolve: {
    extensions: [".mjs", ".ts", ".js"],
  },
  optimization: {
    minimize: false,
  },
  output: {
    libraryTarget: "commonjs",
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  }
};