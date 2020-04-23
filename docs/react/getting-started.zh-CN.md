---
order: 1
title: 使用说明
---

Hey Design React 致力于提供给程序员**愉悦**的开发体验。

> 在开始之前，推荐先学习 [React](http://reactjs.org) 和 [ES2015](http://babeljs.io/docs/learn-es2015/)，并正确安装和配置了 [Node.js](https://nodejs.org/) v8 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 React 全家桶的正确开发方式。如果你刚开始学习前端或者 React，将 UI 框架作为你的第一步可能不是最好的主意。

---

## 安装

### 使用 npm 安装

**推荐使用 npm 的方式进行开发**。如此不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install hey-design --save
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `hey-design`。

**此种引入方法还未开通，敬请期待**。

## 使用

```jsx
import { Button } from 'hey-design';
ReactDOM.render(<Button>确定<Button/>, mountNode);
```
