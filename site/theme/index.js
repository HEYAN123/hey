const path = require('path');

const homeTmpl = './template/Home/index';
const contentTmpl = './template/Content/index';
const appShellTmpl = './template/AppShell';

// gitpages前缀
const preUrl = '/hey';

function pickerGenerator(module) {
  const tester = new RegExp(`^docs/${module}`);
  return markdownData => {
    const { filename } = markdownData.meta;
    if (tester.test(filename) && !/\/demo$/.test(path.dirname(filename))) {
      return {
        meta: markdownData.meta,
      };
    }
    return null;
  };
}

module.exports = {
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  pick: {
    components(markdownData) {
      const { filename } = markdownData.meta;
      if (!/^components/.test(filename) || /[/\\]demo$/.test(path.dirname(filename))) {
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
    'docs/react': pickerGenerator('react'),
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2&keepElem',
    '@ant-design/bisheng-plugin?injectProvider',
    'bisheng-plugin-react?lang=__react',
  ],
  routes: {
    path: '/',
    component: './template/Layout/index',
    indexRoute: { component: homeTmpl },
    childRoutes: [
      {
        path: `${preUrl}/index-cn`,
        component: homeTmpl,
      },
      {
        path: `${preUrl}/app-shell`,
        component: appShellTmpl,
      },
      {
        path: `${preUrl}/docs/react/:children`,
        component: contentTmpl,
      },
      {
        path: `${preUrl}/changelog`,
        component: contentTmpl,
      },
      {
        path: `${preUrl}/changelog-cn`,
        component: contentTmpl,
      },
      {
        path: `${preUrl}/components/form/v3`,
        component: contentTmpl,
      },
      {
        path: `${preUrl}/components/form/v3-cn`,
        component: contentTmpl,
      },
      {
        path: `${preUrl}/components/:children`,
        component: contentTmpl,
      },
    ],
  },
};
