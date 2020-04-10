/* eslint-disable no-param-reassign */
const path = require("path");
const webpack = require("webpack");
// const getWebpackConfig = require("@ant-design/tools/lib/getWebpackConfig");
const replaceLib = require("@ant-design/tools/lib/replaceLib");
const CSSSplitWebpackPlugin = require("css-split-webpack-plugin").default;
// 分割打包后过于庞大的css文件
// const { webpack } = getWebpackConfig;
const isDev = process.env.NODE_ENV === "development";

function alertBabelConfig(rules) {
  rules.forEach(rule => {
    if (rule.loader && rule.loader === "babel-loader") {
      if (rule.options.plugins.indexOf(replaceLib) === -1) {
        rule.options.plugins.push(replaceLib);
      }
      // eslint-disable-next-line
        rule.options.plugins = rule.options.plugins.filter(
        plugin => !plugin.indexOf || plugin.indexOf("babel-plugin-add-module-exports") === -1,
      );
      // Add babel-plugin-add-react-displayname
      rule.options.plugins.push(require.resolve("babel-plugin-add-react-displayname"));
    } else if (rule.use) {
      alertBabelConfig(rule.use);
    }
  });
}

// const reactExternals = {
//   react: "react",
//   "react-dom": "ReactDOM",
//   "react-router": "ReactRouter",
// };

module.exports = {
  port: 8003,
  source: {
    components: "./components", // 组件路径
    library: "./library", // 文档路径
    changelog: ["CHANGELOG.zh-CN.md"], // 修改历史
  },
  htmlTemplate: "./site/theme/static/template.html", // 页面模板
  theme: "./site/theme", //  /index.js 网站渲染模板入口
  themeConfig: { // 主题配置
    home: "/",
    siteName: "hey-design",
    tagline: "hello world",
    github: "https://github.com/HEYAN123/hey",
    typeOrder: { // 目录
      // 组件
      General: 0,
      Layout: 1,
      Navigation: 2,
      "Data Entry": 3,
      "Data Display": 4,
      Feedback: 5,
      Other: 6,
      Deprecated: 7,
      通用: 0,
      布局: 1,
      导航: 2,
      数据录入: 3,
      数据展示: 4,
      反馈: 5,
      其他: 6,
      废弃: 7,

      // 设计
      原则: 1,
      Principles: 1,
      全局规则: 2,
      "Global Rules": 2,
      模板文档: 3,
      "Template Document": 3,
    },
  },
  // 路径配置
  filePathMapper(filePath) {
    if (filePath === "/index.html") {
      return ["/index.html", "/index-cn.html"];
    }
    if (filePath.endsWith("/index.html")) {
      return [filePath, filePath.replace(/\/index\.html$/, "-cn/index.html")];
    }
    if (filePath !== "/404.html" && filePath !== "/index-cn.html") {
      return [filePath, filePath.replace(/\.html$/, "-cn.html")];
    }
    return filePath;
  },
  doraConfig: {
    verbose: true,
  },
  lessConfig: {
    javascriptEnabled: true,
  },
  // 打包配置
  webpackConfig(config) {
    // 扩展
    // eslint-disable-next-line
    config.externals = {
      // history: "History",
      "babel-polyfill": "this",
      // "react-router-dom": "ReactRouterDOM",
    };
    // if (!isDev) {
    //   config.externals = Object.assign(config.externals, reactExternals);
    // } else {
    config.devtool = "source-map";
    // }
    alertBabelConfig(config.module.rules);
    config.plugins.push(new CSSSplitWebpackPlugin({ size: 4000 }));
    // 配置别名 缩短引用路径
    // eslint-disable-next-line
    config.resolve.alias = {
      "hey-design/lib": path.join(process.cwd(), "components"),
      "hey-design/es": path.join(process.cwd(), "components"),
      "hey-design": path.join(process.cwd(), "index.js"), // 返回nodejs进程的当前工作目录
      "react-intl": "react-intl/dist",
      site: path.join(process.cwd(), "site"),
    };
    // eslint-disable-next-line
    config.performance = {
      hints: "warning",
      // 入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter(assetFilename) {
        return assetFilename.endsWith(".js");
      },
    };
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
    );

    config.module.rules.push({
      test: /webpack-dev-server|to-fast-properties/,
      loader: "babel-loader",
    });

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    // eslint-disable-next-line no-param-reassign
    delete config.module.noParse;

    return config;
  },

  devServerConfig: {
    // public: process.env.DEV_HOST || "localhost",
    disableHostCheck: true,
  },

  htmlTemplateExtraData: {
    isDev,
  },
};
