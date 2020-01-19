const merge = require("webpack-merge");
const webpack = require("webpack");
const base = require("./webpack.base");

module.exports = merge(base, {
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    port: 80,
    host: "local.hey-dev.com",
    open: true,
    hot: true,

  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
