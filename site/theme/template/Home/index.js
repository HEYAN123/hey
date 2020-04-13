import React from "react";
import { Link } from "bisheng/router";
import { getLocalizedPathname } from "../utils";

// import { injectIntl } from "react-intl";

// 网站首页

class Home extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="main-wrapper">
          <section className="home-s1">
            <div className="banner-wrapper">
              <div className="banner-text-wrapper">
                <h2 key="h2">Hey Design</h2>
                <div key="button1" className="start-button">
                  欢迎你
                </div>
              </div>
            </div>
          </section>
          <div className="wrapper">
              文字文字
          </div>
          <h1>
            <Link
              to={getLocalizedPathname("/library/resources", true, {
                zhCN: "文章",
                enUS: "Articles",
              })}
            >
            more
            </Link>
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
