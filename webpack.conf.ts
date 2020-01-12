import * as fs from "fs";
import * as path from "path";
import * as webpack from "webpack";

const basePath = fs.realpathSync(__dirname);
const mode = process.env.NODE_ENV === "production" ? "production" : "development";

const config: webpack.Configuration = {
  entry: path.resolve(basePath, "src/index.ts"),
  mode,
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /.ts$/,
      },
    ],
  },
  output: {
    filename: "index.js",
    path: path.join(basePath, "/dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules"],
  },
  target: "node",
};

module.exports = config;
