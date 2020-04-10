import React, { Children, cloneElement } from "react";
import PropTypes from "prop-types";
import DocumentTitle from "react-document-title";
import { getChildren } from "jsonml.js/lib/utils";
// import Timeline from "antd/lib/timeline";
// import Tabs from "antd/lib/tabs";

// const { TabPane } = Tabs;

export default class Article extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const { location } = this.props;
      const linkTo = location.hash.replace("#", "");
      if (linkTo) {
        document.getElementById(linkTo).scrollIntoView();
      }
    }, 500);
  }


  getArticle(art) {
    // Todo: right now just hack it, wait move to bisheng-plugin-antd
    const article = this.tryToRenderIntroducePageTab(art);
    const { content } = this.props;
    const { meta } = content;
    if (!meta.timeline) {
      return article;
    }
    const timelineItems = [];
    let temp = [];
    Children.forEach(article.props.children, (child) => {
      if (child.type === "h2" && temp.length > 0) {
        timelineItems.push(<h1>{temp}</h1>);
        temp = [];
      }
      temp.push(child);
    });
    return cloneElement(article, {
      children: <h1>{timelineItems}</h1>,
    });
  }

  tryToRenderIntroducePageTab(art) {
    if (window.location.href.indexOf("introduce") === -1) {
      return art;
    }
    const allChildren = [].slice.call(art.props.children);

    const webIndex = allChildren.findIndex(item => item.type === "h4" && item.props.id.includes("Web"));
    const RnIndex = allChildren.findIndex(item => item.type === "h4" && item.props.id.includes("React-Native"));
    if (webIndex === -1 || RnIndex === -1) {
      return art;
    }
    const endIndex = allChildren.findIndex((item, index) => item.type === "h2" && index > RnIndex);

    const newChildren = allChildren.slice(0, webIndex);
    const webContent = allChildren.slice(webIndex, RnIndex);
    webContent.splice(0, 1);
    const rnContent = allChildren.slice(RnIndex, endIndex);
    rnContent.splice(0, 1);
    const otherContent = allChildren.slice(endIndex, allChildren.length);
    const IntroTabs = (
      <div defaultActiveKey="1" key="tabs">
        <h2 tab={allChildren[webIndex].props.id.replace(/-/g, " ")} key="1" className="markdown">{webContent}</h2>
        <h2 tab={allChildren[RnIndex].props.id.replace(/-/g, " ")} key="2" className="markdown">{rnContent}</h2>
      </div>
    );
    newChildren.push(IntroTabs);
    newChildren.push(otherContent);
    const article = React.cloneElement(art, {}, newChildren);
    return article;
  }

  render() {
    const { props } = this;
    const { content } = props;

    const { meta, description } = content;
    const {
      title, subtitle, chinese, english,
    } = meta;
    return (
      <DocumentTitle title={`${title || chinese || english} - Crpl Mobile`}>
        <article className="markdown">
          <h1>
            {title || english}
            {
              (!subtitle && !chinese) ? null : <span className="subtitle">{subtitle || chinese}</span>
            }
          </h1>
          {
            !description ? null
              : props.utils.toReactComponent(["section", { className: "markdown" }].concat(getChildren(description)))
          }
          {
            (!content.toc || content.toc.length <= 1 || meta.toc === false)
              ? null
              : <section className="toc">{props.utils.toReactComponent(content.toc)}</section>
          }
          {
            this.getArticle(props.utils.toReactComponent(["section", { className: "markdown" }].concat(getChildren(content.content))))
          }
        </article>
      </DocumentTitle>
    );
  }
}

Article.propTypes = {
  location: PropTypes.object,
  content: PropTypes.object,
  utils: PropTypes.object,
};

Article.defaultProps = {
  location: {},
  content: {},
  utils: {},
};
