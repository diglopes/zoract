const path = require("path");
const isDevMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevMode ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "zoract.min.js",
    libraryTarget: "var",
    library: "zoract",
  },
};
