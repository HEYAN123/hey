/* eslint no-console:0 */
// "-"命名 -> 驼峰命名转换
// function camelCase(name) {
//   return name.charAt(0).toUpperCase() + name.slice(1).
// replace(/-(\w)/g, (m, n) => n.toUpperCase());
// }

// Just import style for https://github.com/ant-design/ant-design/issues/3745
const req = require.context("./components", true, /^\.\/[^_][\w-]+\/style\/index\.js?$/);

req.keys().forEach(mod => {
  req(mod);
});

// 组件包输出
module.exports = require("./components/index");
