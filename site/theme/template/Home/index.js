/* eslint-disable react/prop-types */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "bisheng/router";
import * as utils from "../utils";

// import { injectIntl } from "react-intl";

// 网站首页

class Home extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { pathname } = location;
    const isZhCN = utils.isZhCN(pathname);
    this.state = {
      isZhCN,
    };
  }

  render() {
    const { isZhCN } = this.state;
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
          <Link to="/library/resources-cn">
            <button type="button" size="large">
              开始
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  location: PropTypes.object,
  pathname: PropTypes.string,
};

Home.defaultProps = {
  location: {},
  pathname: "",
};

export default Home;
