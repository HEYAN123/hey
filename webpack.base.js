// webpack基础配置
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const webpack = require("webpack");

module.exports = {
    // polyfill是为了转码es6新api
    // 入口
    entry: ["babel-polyfill", "./src/index.js"],
    // 出口
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "js/main.js"
    },
    // 模块加载
    module: {
        rules: [
            // 编译css文件
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true // 开启css-module
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'library')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            // 编译js或jsx文件
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            // 编译图片文件
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: "images/[name].[hash:5].[ext]"
                    }
                }
            }

        ]
    },
    // 插件使用
    plugins: [
        new HtmlWebpackPlugin({
            title: `Hey!`,
            filename: "index.html",
            template: "./templates/index.ejs"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
    // webpack集成插件配置
    optimization: {
        splitChunks: {
            cacheGroups: {
                name: "commons",
                chunks: "initial",
                minChunks: false
            }
        }
    }
}