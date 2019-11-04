const merge = require("webpack-merge");
const base = require("./webpack.base");
const webpack = require("webpack");

module.exports = merge(base, {
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
        host: true,
        port: 80,
        host: "local.hey-dev.com",
        open: true,
        hot: true,
        
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})