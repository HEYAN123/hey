const path = require("path");

const homeTmpl = "./template/Home/index";
const contentTmpl = "./template/Content/index";

// function pickerGenerator(module) {
//   const tester = new RegExp(`^docs/${module}`);
//   return markdownData => {
//     const { filename } = markdownData.meta;
//     if (tester.test(filename) && !/\/demo$/.test(path.dirname(filename))) {
//       return {
//         meta: markdownData.meta,
//       };
//     }
//     return null;
//   };
// }

module.exports = {
  // ❓会更新不断
  // lazyLoad(nodePath, nodeValue) {
  //   if (typeof nodeValue === "string") {
  //     return true;
  //   }
  //   console.log("node", nodePath);
  //   return nodePath.endsWith("/demo");
  // },
  pick: {
    components(markdownData) {
      const { filename } = markdownData.meta;
      if (!/^library/.test(filename) || /[/\\]demo$/.test(path.dirname(filename))) {
        return null;
      }
      return {
        meta: markdownData.meta,
      };
    },
    changelog(markdownData) {
      if (/CHANGELOG/.test(markdownData.meta.filename)) {
        return {
          meta: markdownData.meta,
        };
      }
      return null;
    },
    // "docs/react": pickerGenerator("react"),
    // "docs/spec": pickerGenerator("spec"),
  },
  plugins: [
    "bisheng-plugin-description",
    "bisheng-plugin-toc?maxDepth=2&keepElem",
    "@ant-design/bisheng-plugin?injectProvider",
    "bisheng-plugin-react?lang=__react",
  ],
  routes: {
    path: "/",
    component: "./template/Layout/index",
    indexRoute: { component: homeTmpl },
    childRoutes: [
      // 首页
      {
        path: "index-cn",
        component: homeTmpl,
      },
      // 组件路由
      {
        path: "components/:children/",
        component: contentTmpl,
      },
    ],
  },
};
