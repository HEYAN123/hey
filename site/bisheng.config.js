const path = require("path");
const replaceLib = require("@ant-design/tools/lib/replaceLib");
const getWebpackConfig = require("@ant-design/tools/lib/getWebpackConfig");
const CSSSplitWebpackPlugin = require("css-split-webpack-plugin").default; // 分割打包后过于庞大的css文件
const { version } = require("../package.json");

const { webpack } = getWebpackConfig;

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

module.exports = {
  port: 8001,
  // hash: true,
  source: {
    components: "./library", // 组件路径
    docs: "./docs", // 文档路径
    changelog: ["CHANGELOG.zh-CN.md"], // 修改历史
    // "docs/resources": ["./docs/resources.zh-CN.md", "./docs/resources.en-US.md"],
  },
  htmlTemplate: "./site/theme/static/template.html", // 页面模板
  theme: "./site/theme", // 主题
  themeConfig: { // 主题配置
    home: "/",
    siteName: "hey-design",
    tagline: "hello world",
    github: "https://github.com/HEYAN123/hey",
    categoryOrder: { // 目录顺序
      "Ant Design": 0,
      全局样式: 1,
      "Global Styles": 1,
      设计模式: 2,
      "Design Patterns": 2,
      "设计模式 - 探索": 3,
      "Design Patterns (Research)": 3,
      Components: 100,
      组件: 100,
    },
    typeOrder: { // 类型顺序
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
  webpackConfig(config) {
    // eslint-disable-next-line
      config.resolve.alias = {
      "hey-design/lib": path.join(process.cwd(), "library"),
      "hey-design/es": path.join(process.cwd(), "library"),
      hey: path.join(process.cwd(), "index"),
      site: path.join(process.cwd(), "site"),
      "react-router": "react-router/umd/ReactRouter",
      "react-intl": "react-intl/dist",
    };

    // eslint-disable-next-line
      config.externals = {
      "react-router-dom": "ReactRouterDOM",
    };

    if (isDev) {
      // eslint-disable-next-line
      config.devtool = 'source-map';
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias = { ...config.resolve.alias, react: require.resolve("react") };
    }

    alertBabelConfig(config.module.rules);

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        antdReproduceVersion: JSON.stringify(version),
      }),
    );

    config.plugins.push(
      new CSSSplitWebpackPlugin({
        size: 3000,
      }),
    );

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
