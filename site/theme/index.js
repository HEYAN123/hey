const path = require("path");
const cnLocale = require("./zh-CN");

const homeTmpl = "./template/Home/index";
const contentTmpl = "./template/Content/index";

// 获取生成器picker
function pickerGenerator(module) {
  console.log("module", module);
  const tester = new RegExp(`^library/${module}`);
  return markdownData => {
    const { filename } = markdownData.meta;
    if (tester.test(filename)) {
      return {
        meta: markdownData.meta,
      };
    }
    return null;
  };
}

module.exports = {
  // ❓会更新不断
  // lazyLoad(nodePath, nodeValue) {
  //   if (typeof nodeValue === "string") {
  //     return true;
  //   }
  //   console.log("node", nodePath);
  //   return nodePath.endsWith("/demo");
  // },
  cnLocale,
  pick: {
    components(markdownData) {
      console.log("!!!!!!", markdownData);
      const { filename } = markdownData.meta;
      if (!/^components/.test(filename)
          || /\/demo$/.test(path.dirname(filename))) return;
      /* eslint-disable consistent-return */
      return {
        meta: markdownData.meta,
      };
      /* eslint-enable consistent-return */
    },
    /* eslint-disable consistent-return */
    changelog(markdownData) {
      if (/CHANGELOG/.test(markdownData.meta.filename)) {
        return {
          meta: markdownData.meta,
        };
      }
    },
    /* eslint-enable consistent-return */
    library: pickerGenerator("resources"),
  },
  plugins: [
    "bisheng-plugin-description",
    "bisheng-plugin-toc?maxDepth=2&keepElem",
    "bisheng-plugin-antd?noPreview",
    "bisheng-plugin-react?lang=__react",
  ],
  routes: {
    // 总路由
    path: "/",
    // container
    component: "./template/Layout/index",
    // 首页路由指向的页面模板（首页）
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
      {
        path: "library/:children",
        component: contentTmpl,
      },
    ],
  },
};
