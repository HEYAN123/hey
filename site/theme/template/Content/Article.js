import React, { Children, cloneElement } from "react";
import { injectIntl } from "react-intl";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { getChildren } from "jsonml.js/lib/utils";
// import { Timeline, Alert, Affix } from "antd";
// import EditButton from "./EditButton";
import { getMetaDescription } from "../utils";


class Article extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { location } = this.props;
    const { location: nextLocation } = nextProps;

    if (nextLocation.pathname === location.pathname) {
      return false;
    }
    return true;
  }

  onResourceClick(event) {
    const { target } = event;
    if (!window.gtag) {
      return;
    }
    const cardNode = target.closest(".resource-card");
    if (cardNode) {
      window.gtag("event", "resource", {
        event_category: "Download",
        event_label: cardNode.href,
      });
    }
    if (
      window.location.href.indexOf("docs/react/recommendation") > 0
      && target.matches(".markdown > table td > a[href]")
    ) {
      window.gtag("event", "recommendation", {
        event_category: "Click",
        event_label: target.href,
      });
    }
  }

  getArticle(article) {
    const { content } = this.props;
    const { meta } = content;
    if (!meta.timeline) {
      return article;
    }
    const timelineItems = [];
    let temp = [];
    Children.forEach(article.props.children, child => {
      if (child.type === "h2" && temp.length > 0) {
        timelineItems.push(<h2>{temp}</h2>);
        temp = [];
      }
      temp.push(child);
    });
    if (temp.length > 0) {
      timelineItems.push(<h2>{temp}</h2>);
    }
    return cloneElement(article, {
      children: <div>{timelineItems}</div>,
    });
  }

  render() {
    const {
      titleRegionClassName,
      content,
      intl: { locale },
      utils,
    } = this.props;
    const { meta, description } = content;
    const { title, subtitle } = meta;
    const helmetTitle = `${(title)[locale] || title} - Ant Design`;
    const helmetDesc = getMetaDescription(description);
    const contentChild = getMetaDescription(getChildren(content.content));
    const metaDesc = helmetDesc || contentChild;

    return (
      /* eslint-disable-next-line */
      <article className="markdown" onClick={this.onResourceClick}>
        <Helmet encodeSpecialCharacters={false}>
          {helmetTitle && <title>{helmetTitle}</title>}
          {helmetTitle && <meta property="og:title" content={helmetTitle} />}
          {metaDesc && <meta name="description" content={metaDesc} />}
        </Helmet>
        <div className={titleRegionClassName}>
          <h1>
            {(title)[locale] || title}
            {!subtitle || locale === "en-US" ? null : <span className="subtitle">{subtitle}</span>}
          </h1>
          {!description
            ? null
            : utils.toReactComponent(
              ["section", { className: "markdown" }].concat(getChildren(description)),
            )}
        </div>
        {!content.toc || content.toc.length <= 1 || meta.toc === false ? null : (
          <div className="toc-affix" offsetTop={16}>
            {utils.toReactComponent(["ul", { className: "toc" }].concat(getChildren(content.toc)))}
          </div>
        )}
        {this.getArticle(
          utils.toReactComponent(
            ["section", { className: "markdown" }].concat(getChildren(content.content)),
          ),
        )}
        {utils.toReactComponent(
          [
            "section",
            {
              className: "markdown api-container",
            },
          ].concat(getChildren(content.api || ["placeholder"])),
        )}
      </article>
    );
  }
}

Article.propTypes = {
  location: PropTypes.object,
  content: PropTypes.object,
  titleRegionClassName: PropTypes.string,
  intl: PropTypes.object,
  utils: PropTypes.object,
};

Article.defaultProps = {
  location: {},
  content: {},
  titleRegionClassName: "",
  intl: {},
  utils: {},
};

export default (injectIntl(Article));
