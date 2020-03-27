(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{421:function(n,a){n.exports={content:["article",{},["h2","第一个例子"],["p","这是一个最简单的 Ant Design 组件的在线 codesandbox 演示。"],["iframe",{src:"https://codesandbox.io/embed/antd-reproduction-template-6e93z?autoresize=1&fontsize=14&hidenavigation=1&theme=dark",style:"width: 100%; height: 500px; border: 0px; border-radius: 4px; overflow: hidden;",title:"antd reproduction template",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}],["h3","1. 创建一个 codesandbox"],["p","访问 ",["a",{title:null,href:"http://u.ant.design/codesandbox-repro"},"http://u.ant.design/codesandbox-repro"]," 创建一个 codesandbox 的在线示例，别忘了保存以创建一个新的实例。"],["h3","2. 使用组件"],["p","直接用下面的代码替换 ",["code","index.js"]," 的内容，用 React 的方式直接使用 antd 组件。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider<span class="token punctuation">,</span> DatePicker<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// 由于 antd 组件的默认文案是英文，所以需要修改为中文</span>\n<span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">\'antd/es/locale/zh_CN\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'moment/locale/zh-cn\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'antd/dist/antd.css\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./index.css\'</span><span class="token punctuation">;</span>\n\nmoment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">\'zh-cn\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    date<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  handleChange <span class="token operator">=</span> date <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`您选择的日期是: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>date <span class="token operator">?</span> date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">\'未选择\'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> date <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> date <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> margin<span class="token punctuation">:</span> <span class="token string">\'100px auto\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            当前日期：<span class="token punctuation">{</span>date <span class="token operator">?</span> date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">\'未选择\'</span><span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { ConfigProvider, DatePicker, message } from 'antd';\n// 由于 antd 组件的默认文案是英文，所以需要修改为中文\nimport zhCN from 'antd/es/locale/zh_CN';\nimport moment from 'moment';\nimport 'moment/locale/zh-cn';\nimport 'antd/dist/antd.css';\nimport './index.css';\n\nmoment.locale('zh-cn');\n\nclass App extends React.Component {\n  state = {\n    date: null,\n  };\n\n  handleChange = date => {\n    message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`);\n    this.setState({ date });\n  };\n  render() {\n    const { date } = this.state;\n    return (\n      <ConfigProvider locale={zhCN}>\n        <div style={{ width: 400, margin: '100px auto' }}>\n          <DatePicker onChange={this.handleChange} />\n          <div style={{ marginTop: 20 }}>\n            当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}\n          </div>\n        </div>\n      </ConfigProvider>\n    );\n  }\n}\n\nReactDOM.render(<App />, document.getElementById('root'));"]],["h3","3. 探索更多组件用法"],["p","你可以在左侧菜单查看组件列表，比如 ",["a",{title:null,href:"/components/alert-cn"},"Alert"]," 组件，组件文档中提供了各类演示，最下方有组件 API 文档可以查阅。在代码演示部分找到第一个例子，点击右下角的图标展开代码。"],["p","然后依照演示代码的写法，在之前的 codesandbox 里修改 ",["code","index.js"],"，首先在 ",["code","import"]," 内引入 Alert 组件："],["pre",{lang:"diff",highlighted:"<span class=\"token deleted\">- import { ConfigProvider, DatePicker, message } from 'antd';</span>\n<span class=\"token inserted\">+ import { ConfigProvider, DatePicker, message, Alert } from 'antd';</span>"},["code","- import { ConfigProvider, DatePicker, message } from 'antd';\n+ import { ConfigProvider, DatePicker, message, Alert } from 'antd';"]],["p","然后在 ",["code","render"]," 内添加相应的 jsx 代码："],["pre",{lang:"diff",highlighted:"  &lt;DatePicker onChange={value => this.handleChange(value)} />\n  &lt;div style={{ marginTop: 20 }}>\n<span class=\"token deleted\">-   当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}</span>\n<span class=\"token inserted\">+   &lt;Alert message={`当前日期：${date ? date.format('YYYY-MM-DD') : '未选择'}`} type=\"success\" /></span>\n  &lt;/div>"},["code","  <DatePicker onChange={value => this.handleChange(value)} />\n  <div style={{ marginTop: 20 }}>\n-   当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}\n+   <Alert message={`当前日期：${date ? date.format('YYYY-MM-DD') : '未选择'}`} type=\"success\" />\n  </div>"]],["p","在右侧预览区就可以看到如图的效果。"],["p",["img",{width:"420",src:"https://gw.alipayobjects.com/zos/antfincdn/Up3%24VYhN0S/134614ee-7440-46f1-a797-fa6f6b3e300f.png",alt:"codesandbox screenshot"}]],["p","好的，现在你已经会使用基本的 antd 组件了，你可以在这个例子中继续探索其他组件的用法。如果你遇到组件的 bug，也推荐建一个可重现的 codesandbox 来报告 bug。"],["h3","4. 下一步"],["p","实际项目开发中，你会需要构建、调试、代理、打包部署等一系列工程化的需求。您可以阅读后面的文档或者使用以下脚手架和范例："],["ul",["li",["p",["a",{title:null,href:"http://pro.ant.design/"},"Ant Design Pro"]]],["li",["p",["a",{title:null,href:"https://github.com/zuiidea/antd-admin"},"antd-admin"]]],["li",["p",["a",{title:null,href:"https://github.com/d2-projects/d2-admin"},"d2-admin"]]],["li",["p","更多脚手架可以查看 ",["a",{title:null,href:"http://scaffold.ant.design/"},"脚手架市场"]]]],["h2","兼容性"],["p","Ant Design React 支持所有的现代浏览器和 IE11+。"],["table",["thead",["tr",["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"IE / Edge",width:"24px",height:"24px"}]],["br"],"IE / Edge"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox",width:"24px",height:"24px"}]],["br"],"Firefox"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome",width:"24px",height:"24px"}]],["br"],"Chrome"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari",width:"24px",height:"24px"}]],["br"],"Safari"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png",alt:"Opera",width:"24px",height:"24px"}]],["br"],"Opera"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png",alt:"Electron",width:"24px",height:"24px"}]],["br"],"Electron"]]],["tbody",["tr",["td","IE11, Edge"],["td","last 2 versions"],["td","last 2 versions"],["td","last 2 versions"],["td","last 2 versions"],["td","last 2 versions"]]]],["p","对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 ",["a",{title:null,href:"https://babeljs.io/docs/en/babel-preset-env"},"babel-preset-env"]," 来解决浏览器兼容问题。如果你在使用 ",["a",{title:null,href:"http://umijs.org/"},"umi"],"，可以直接使用 ",["a",{title:null,href:"https://umijs.org/zh/config/#targets"},"targets"]," 配置。"],["p","Ant Design 3.0 对 React 15/16 两个版本提供支持，但是我们强烈建议你升级到 React 16，以便获得更好的性能和遇到更少的问题。"],["h4","IE note"],["blockquote",["p",["code","antd@2.0"]," 之后将不再支持 IE8，",["code","antd@4.0"]," 之后将不再支持 IE9/10。"]],["h2","自行构建"],["p","如果想自己维护工作流，我们推荐使用 ",["a",{title:null,href:"http://webpack.github.io/"},"webpack"]," 进行构建和调试。理论上你可以利用 React 生态圈中的 ",["a",{title:null,href:"https://github.com/enaqx/awesome-react#boilerplates"},"各种脚手架"]," 进行开发，如果遇到问题可参考我们所使用的 ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js"},"webpack 配置"]," 进行 ",["a",{title:null,href:"http://ant-tool.github.io/webpack-config.html"},"定制"],"。"],["p","如果你使用 ",["a",{title:null,href:"https://parceljs.org"},"parcel"],"，这里也有 ",["a",{title:null,href:"https://github.com/ant-design/parcel-antd"},"一个例子"]," 可以参考。"],["p","目前社区也有很多基于 antd 定制的 ",["a",{title:null,href:"http://scaffold.ant.design/"},"脚手架"],"，欢迎进行试用和贡献。"],["h2","按需加载"],["p","如果你在开发环境的控制台看到下面的提示，那么你可能使用了 ",["code","import { Button } from 'antd';"]," 的写法引入了 antd 下所有的模块，这会影响应用的网络性能。"],["pre",{lang:null,highlighted:'You are using a whole package of antd<span class="token punctuation">,</span> please use https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>npmjs<span class="token punctuation">.</span>com<span class="token operator">/</span>package<span class="token operator">/</span>babel<span class="token operator">-</span>plugin<span class="token operator">-</span>import <span class="token keyword">to</span> reduce app bundle size<span class="token punctuation">.</span>'},["code","You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size."]],["blockquote",["p",["img",{title:null,src:"https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png",alt:"控制台警告"}]]],["p","可以通过以下的写法来按需加载组件。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'antd/es/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'antd/es/button/style\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 或者 antd/es/button/style/css 加载 css 文件</span>'},["code","import Button from 'antd/es/button';\nimport 'antd/es/button/style'; // 或者 antd/es/button/style/css 加载 css 文件"]],["blockquote",["p","注意：antd 默认支持基于 ES module 的 tree shaking，对于 js 部分，直接引入 ",["code","import { Button } from 'antd'"]," 也会有按需加载的效果。"]],["p","如果你使用了 babel，那么可以使用 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," 来进行按需加载，加入这个插件后。你可以仍然这么写："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>'},["code","import { Button } from 'antd';"]],["p","插件会帮你转换成 ",["code","antd/es/xxx"]," 的写法。另外此插件配合 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import#usage"},"style"]," 属性可以做到模块样式的按需自动加载。"],["blockquote",["p","注意，babel-plugin-import 的 ",["code","style"]," 属性除了引入对应组件的样式，也会引入一些必要的全局样式。如果你不需要它们，建议不要使用此属性。你可以 ",["code","import 'antd/dist/antd.css'"]," 手动引入，并覆盖全局样式。"]],["h2","使用 Day.js 替换 momentjs 优化打包大小"],["p","你可以使用 ",["a",{title:null,href:"https://github.com/ant-design/antd-dayjs-webpack-plugin"},"antd-dayjs-webpack-plugin"]," 插件用 Day.js 替换 momentjs 来大幅减小打包大小。这需要更新 webpack 的配置文件如下："],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// webpack-config.js</span>\n<span class="token keyword">import</span> AntdDayjsWebpackPlugin <span class="token keyword">from</span> <span class="token string">\'antd-dayjs-webpack-plugin\'</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// ...</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">AntdDayjsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","// webpack-config.js\nimport AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';\n\nmodule.exports = {\n  // ...\n  plugins: [new AntdDayjsWebpackPlugin()],\n};"]],["h2","配置主题和字体"],["ul",["li",["p",["a",{title:null,href:"/docs/react/customize-theme"},"改变主题"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"},"使用本地字体"]]]]],meta:{order:2,title:"快速上手",filename:"lib/react/getting-started.zh-CN.md"},description:["section",["p","Ant Design React 致力于提供给程序员",["strong","愉悦"],"的开发体验。"],["blockquote",["p","在开始之前，推荐先学习 ",["a",{title:null,href:"http://reactjs.org"},"React"]," 和 ",["a",{title:null,href:"http://babeljs.io/docs/learn-es2015/"},"ES2015"],"，并正确安装和配置了 ",["a",{title:null,href:"https://nodejs.org/"},"Node.js"]," v8 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 React 全家桶的正确开发方式。如果你刚开始学习前端或者 React，将 UI 框架作为你的第一步可能不是最好的主意。"]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#第一个例子",title:"第一个例子"},"第一个例子"]],["li",["a",{className:"bisheng-toc-h2",href:"#兼容性",title:"兼容性"},"兼容性"]],["li",["a",{className:"bisheng-toc-h2",href:"#自行构建",title:"自行构建"},"自行构建"]],["li",["a",{className:"bisheng-toc-h2",href:"#按需加载",title:"按需加载"},"按需加载"]],["li",["a",{className:"bisheng-toc-h2",href:"#使用-Day.js-替换-momentjs-优化打包大小",title:"使用 Day.js 替换 momentjs 优化打包大小"},"使用 Day.js 替换 momentjs 优化打包大小"]],["li",["a",{className:"bisheng-toc-h2",href:"#配置主题和字体",title:"配置主题和字体"},"配置主题和字体"]]]}}}]);