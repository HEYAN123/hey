const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const base = require("./webpack.base");

module.exports = merge(base, {
  plugins: [
    new UglifyJSPlugin(),
  ],
});
