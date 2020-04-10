import React from "react";
import PropTypes from "prop-types";
import { Link } from "bisheng/router";
// import Menu from "antd/lib/menu";
// import div from "antd/lib/div";
// import div from "antd/lib/div";
import Article from "./Article";
// import ComponentDoc from "./ComponentDoc";
import * as utils from "../utils";

// const SubMenu = Menu.SubMenu;
const SUBMENUS = {
  Components: "组件",
};

function getModuleData(props) {
  const pathname = props.location.pathname;
  const moduleName = /^\/?components/.test(pathname)
    ? "components" : pathname.split("/").filter(item => item).slice(0, 2).join("/");
  console.log(moduleName);
  const moduleData = moduleName === "components" || moduleName === "library"
    || moduleName === "changelog" || moduleName === "changelog-cn"
    ? [...props.picked.components, ...props.picked.library, ...props.picked.changelog]
    : props.picked[moduleName];
  const excludedSuffix = utils.isZhCN(props.location.pathname) ? "en-US.md" : "zh-CN.md";
  return moduleData.filter(({ meta }) => !meta.filename.endsWith(excludedSuffix));
}

function getActiveMenuItem(props) {
  const children = props.params.children;
  return (children && children.replace("-cn", ""))
    || props.location.pathname.replace(/(^\/|-cn$)/g, "");
}

export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openKeys: this.getSideBarOpenKeys(props) || [] };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    const openKey = this.getSideBarOpenKeys(nextProps);
    const { openKeys } = this.state;
    if (openKey && openKey !== openKeys) {
      this.setState({ openKeys: openKey });
    }
  }

  getSideBarOpenKeys(nextProps) {
    const { pathname } = nextProps.location;
    const prevModule = this.currentModule;
    this.currentModule = pathname.replace(/^\//).split("/")[1] || "components";
    if (this.currentModule === "library") {
      this.currentModule = "components";
    }
    const locale = utils.isZhCN(pathname) ? "zh-CN" : "en-US";
    if (prevModule !== this.currentModule) {
      const moduleData = getModuleData(nextProps);
      const shouldOpenKeys = Object.keys(utils.getMenuItems(moduleData, locale));
      return shouldOpenKeys;
    }
    return "";
  }

  getModuleData() {
    const props = this.props;
    const { intl } = this.context;
    const pathname = props.location.pathname;
    const moduleName = /^components/.test(pathname)
      ? "components" : pathname.split("/").slice(0, 2).join("/");
    const moduleData = moduleName === "components" || moduleName.includes("changelog") || moduleName === "library"
      ? [...props.picked.components, ...props.picked["docs/react"], ...props.picked.changelog].filter(item => item.meta.filename.includes(intl.locale))
      : props.picked[moduleName];

    return moduleData;
  }

  getMenuItems() {
    const { intl } = this.context;
    const { locale } = intl;
    const moduleData = this.getModuleData();
    const menuItems = utils.getMenuItems(moduleData);
    const topLevel = this.generateSubMenuItems(menuItems.topLevel);
    const { themeConfig } = this.props;
    const subMenu = Object.keys(menuItems).filter(this.isNotTopLevel)
      .sort((a, b) => themeConfig.categoryOrder.indexOf(a) - themeConfig.categoryOrder.indexOf(b))
      .map((category) => {
        const cate = locale === "zh-CN" && SUBMENUS[category] ? SUBMENUS[category] : category;
        const subMenuItems = this.generateSubMenuItems(menuItems[category]);
        return (
          <div title={<h4>{cate}</h4>} key={category} className="menu-sub-container">
            {subMenuItems}
          </div>
        );
      });
    return [...topLevel, ...subMenu];
  }


  getFooterNav(menuItems, activeMenuItem) {
    const menuItemsList = this.flattenMenu(menuItems);
    let activeMenuItemIndex = -1;
    menuItemsList.forEach((menuItem, i) => {
      if (menuItem && menuItem.key === activeMenuItem) {
        activeMenuItemIndex = i;
      }
    });
    const prev = menuItemsList[activeMenuItemIndex - 1];
    const next = menuItemsList[activeMenuItemIndex + 1];
    return { prev, next };
  }

  flattenMenu(menu) {
    if (menu.type === "sub") {
      return menu;
    }

    if (Array.isArray(menu)) {
      return menu.reduce((acc, item) => acc.concat(this.flattenMenu(item)), []);
    }

    return this.flattenMenu(menu.props.children);
  }

  generateSubMenuItems(obj) {
    const { intl } = this.context;
    const { locale } = intl;
    const { themeConfig } = this.props;
    const { cateChinese } = themeConfig;
    const topLevel = (obj.topLevel || []).map(this.generateMenuItem.bind(this, true));
    const itemGroups = Object.keys(obj).filter(this.isNotTopLevel)
      .sort((a, b) => themeConfig.categoryOrder.indexOf(a) - themeConfig.categoryOrder.indexOf(b))
      .map(type => {
        const groupItems = obj[type].sort((a, b) => (
          (a.title || a.english).charCodeAt(0) - (b.title || b.english).charCodeAt(0)
        )).map(this.generateMenuItem.bind(this, false));
        const title = locale === "zh-CN" ? cateChinese[type] : type;
        return (
          <div title={title}>
            {groupItems}
          </div>
        );
      });
    return [...topLevel, ...itemGroups];
  }

  isNotTopLevel(level) {
    return level !== "topLevel";
  }

  generateMenuItem(isTop, item) {
    const key = this.fileNameToPath(item.filename);
    let text;
    if (isTop) {
      text = item.title || item.chinese || item.english;
    } else {
      text = [
        <span className="chinese" key="chinese">
          {item.subtitle || item.chinese}
          &nbsp;
        </span>,
        <span key="english">{item.title || item.english}</span>,
      ];
    }
    const disabled = item.disabled;
    let url = item.filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, "").toLowerCase();
    if (item.filename.includes("zh-CN")) {
      url = `${url}-cn`;
    }
    const child = !item.link ? (
      <Link to={/^components/.test(url) ? `${url}/` : url} disabled={disabled}>
        {text}
      </Link>
    ) : (
      <a href={item.link} target="_blank" rel="noopener noreferrer" disabled={disabled}>
        {text}
      </a>
    );

    return (
      <p key={key.toLowerCase()} disabled={disabled}>
        {child}
      </p>
    );
  }

  fileNameToPath(filename) {
    const snippets = filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, "").split("/");
    return snippets[snippets.length - 1];
  }

  handleMenuOpenChange(openKeys) {
    this.setState({ openKeys });
  }


  render() {
    const { props } = this;
    console.log("props", props);
    const activeMenuItem = getActiveMenuItem(props);
    const menuItems = this.getMenuItems();
    const { prev, next } = this.getFooterNav(menuItems, activeMenuItem);

    const localizedPageData = props.localizedPageData;
    const demos = props.demos;
    const DemoEl = demos
      ? (<div {...props} doc={localizedPageData} demos={demos} />)
      : <Article {...props} content={localizedPageData} />;
    return (
      <div className="main-wrapper">
        <div>
          <div lg={5} md={6} sm={24} xs={24}>
            <div
              inlineIndent="40"
              className="aside-container menu-site"
              mode="inline"
              // openKeys={this.state.openKeys}
              selectedKeys={[activeMenuItem]}
              onOpenChange={this.handleMenuOpenChange}
            >
              {menuItems}
            </div>
          </div>
          <div lg={19} md={18} sm={24} xs={24} className="main-container">
            {DemoEl}
          </div>
        </div>
        <div>
          <div
            lg={{ span: 19, offset: 5 }}
            md={{ span: 18, offset: 6 }}
            sm={24}
            xs={24}
          >
            <section className="prev-next-nav">
              {
                prev
                  ? React.cloneElement(prev.props.children, { className: "prev-page" })
                  : null
              }
              {
                next
                  ? React.cloneElement(next.props.children, { className: "next-page" })
                  : null
              }
            </section>
          </div>
        </div>
      </div>
    );
  }
}

MainContent.contextTypes = {
  intl: PropTypes.object.isRequired,
};

MainContent.propTypes = {
  location: PropTypes.object,
  picked: PropTypes.object.isRequired,
  themeConfig: PropTypes.object.isRequired,
  localizedPageData: PropTypes.object.isRequired,
  demos: PropTypes.object.isRequired,
};

MainContent.defaultProps = {
  location: "",
};
