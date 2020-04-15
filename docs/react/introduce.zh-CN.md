---
order: 0
title: Hey Design of React
---

`hey-design` 是基于Ant Design设计语言，react框架的前端组件库，主要用于开发样式定制化程度高的前台产品。

<div class="pic-plus">
  <img width="150" src="https://hey-design.oss-cn-beijing.aliyuncs.com/icon.png"/>
  <span>+</span>
  <img width="150" src="https://hey-design.oss-cn-beijing.aliyuncs.com/icon-antd.svg" />
  <span>+<span>
  <img width="160" src="https://hey-design.oss-cn-beijing.aliyuncs.com/icon-react.svg"/>
  <span>+<span>
  <img width="150" src="https://hey-design.oss-cn-beijing.aliyuncs.com/icon-jss.ico" />
</div>

<style>
.pic-plus > * {
  display: inline-block !important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>

---

## ✨ 特性

- 默认样式遵循antd设计语言。
- 基于原生html开发封装的react组件，复杂逻辑透明化封装，无嵌套依赖，使用灵活。
- 使用 TypeScript 开发，提供完整的类型定义文件。
- 样式易覆盖修改，轻松实现定制化开发。

## 🏡 适用环境

- 现代浏览器和 IE11 及以上。
- PC端前台展示型网站开发。

## 📑 版本

- 1.0.1开发版: <https://www.npmjs.com/package/hey-design>

## 🚀 技术使用

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install antd --save
```

```bash
$ yarn add antd
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `antd`。

我们在 npm 发布包内的 `antd/dist` 目录下提供了 `antd.js` `antd.css` 以及 `antd.min.js` `antd.min.css`。你也可以通过 [![CDNJS](https://img.shields.io/cdnjs/v/antd.svg?style=flat-square)](https://cdnjs.com/libraries/antd)，[![](https://data.jsdelivr.com/v1/package/npm/antd/badge)](https://www.jsdelivr.com/package/npm/antd) 或 [UNPKG](https://unpkg.com/antd/dist/) 进行下载。

> **强烈不推荐使用已构建文件**，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。

> 注意：3.0 之后引入 antd.js 前你需要自行引入 [moment](http://momentjs.com/)。

## 示例

```jsx
import { DatePicker } from 'hey-design';
ReactDOM.render(<DatePicker />, mountNode);
```

引入样式：

```jsx
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
```

### 按需加载

> 注意：antd 默认支持基于 ES module 的 tree shaking，不使用以下插件也会有按需加载的效果。

下面两种方式都可以只加载用到的组件。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

  ```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css" // `style: true` 会加载 less 文件
      }]
    ]
  }
  ```

  然后只需从 antd 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

  ```jsx
  // babel-plugin-import 会帮助你加载 JS 和 CSS
  import { DatePicker } from 'hey-design';
  ```

- 手动引入

  ```jsx
  import DatePicker from 'antd/es/date-picker'; // 加载 JS
  import 'antd/es/date-picker/style/css'; // 加载 CSS
  // import 'antd/es/date-picker/style';         // 加载 LESS
  ```
