const path = require("path");

let webpackConfig = {
  entry: {
    demo01: "./src/ts/demo01.ts",
    demo02: "./src/ts/demo02.ts",
    demo03: "./src/ts/demo03.ts"
  },
  output: {
    filename: "[name].js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".ts", ".js"]
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: "ts-loader"}
    ]
  }
}

module.exports = webpackConfig;
