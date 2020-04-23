const path = require('path');
const replaceLib = require('@ant-design/tools/lib/replaceLib');
const getWebpackConfig = require('@ant-design/tools/lib/getWebpackConfig');
const _miniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { version } = require('../package.json');

const { webpack } = getWebpackConfig;

const isDev = process.env.NODE_ENV === 'development';
const usePreact = process.env.REACT_ENV === 'preact';

function alertBabelConfig(rules) {
  rules.forEach(rule => {
    if (rule.loader && rule.loader === 'babel-loader') {
      if (rule.options.plugins.indexOf(replaceLib) === -1) {
        rule.options.plugins.push(replaceLib);
      }
      // eslint-disable-next-line
      rule.options.plugins = rule.options.plugins.filter(
        plugin => !plugin.indexOf || plugin.indexOf('babel-plugin-add-module-exports') === -1,
      );
      // Add babel-plugin-add-react-displayname
      rule.options.plugins.push(require.resolve('babel-plugin-add-react-displayname'));
    } else if (rule.use) {
      alertBabelConfig(rule.use);
    }
  });
}

module.exports = {
  port: 8003,
  hash: true,
  source: {
    components: './components',
    docs: './docs',
    changelog: ['CHANGELOG.zh-CN.md'],
  },
  theme: './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  themeConfig: {
    categoryOrder: {
      'Hey Design': 0,
      全局样式: 1,
      'Global Styles': 1,
      设计模式: 2,
      'Design Patterns': 2,
      '设计模式 - 探索': 3,
      'Design Patterns (Research)': 3,
      Components: 100,
      组件: 100,
    },
    typeOrder: {
      // Component
      General: 0,
      Layout: 1,
      Navigation: 2,
      'Data Entry': 3,
      'Data Display': 4,
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

      // Design
      原则: 1,
      Principles: 1,
      全局规则: 2,
      'Global Rules': 2,
      模板文档: 3,
      'Template Document': 3,
    },
  },
  filePathMapper(filePath) {
    if (filePath === '/index.html') {
      return ['/index-cn.html', '/index.html'];
    }
    if (filePath.endsWith('/index.html')) {
      return [filePath, filePath.replace(/\/index\.html$/, '-cn/index.html')];
    }
    if (filePath !== '/404.html' && filePath !== '/index-cn.html') {
      return [filePath, filePath.replace(/\.html$/, '-cn.html')];
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
      'hey-design/lib': path.join(process.cwd(), 'components'),
      'hey-design/es': path.join(process.cwd(), 'components'),
      'hey-design': path.join(process.cwd(), 'index'),
      site: path.join(process.cwd(), 'site'),
      'react-router': 'react-router/umd/ReactRouter',
      'react-intl': 'react-intl/dist',
    };

    // eslint-disable-next-line
    config.externals = {
      'react-router-dom': 'ReactRouterDOM',
      'react': 'React',
      'react-dom': 'ReactDOM',
    };

    if (usePreact) {
      // eslint-disable-next-line
      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        react: 'preact-compat',
        'react-dom': 'preact-compat',
        'create-react-class': 'preact-compat/lib/create-react-class',
        'react-router': 'react-router',
      });
    }

    if (isDev) {
      config.externals = {
        'react-router-dom': 'ReactRouterDOM',
      };
      // eslint-disable-next-line
      config.devtool = 'source-map';

      // Resolve use react hook fail when yarn link or npm link
      // https://github.com/webpack/webpack/issues/8607#issuecomment-453068938
      config.resolve.alias = { ...config.resolve.alias, react: require.resolve('react') };
      // 包分析
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerPort: 8004,
      }));
    }

    alertBabelConfig(config.module.rules);

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    // 修改打包后依赖文件名
    config.output.chunkFilename = 'hey/[name]-[contenthash:8].js';
    config.output.filename = 'hey/[name].js';
    // 修改打包后css文件名
    config.plugins.push(
      new _miniCssExtractPlugin({
        filename: 'hey/[name]-[contenthash:8].css',
      }),
    )

    config.plugins.push(
      new webpack.DefinePlugin({
        antdReproduceVersion: JSON.stringify(version),
      }),
    );

    delete config.module.noParse;

    return config;
  },

  devServerConfig: {
    public: process.env.DEV_HOST || 'localhost',
    disableHostCheck: !!process.env.DEV_HOST,
  },

  htmlTemplateExtraData: {
    isDev,
    usePreact,
  },
};
