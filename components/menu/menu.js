import React from "react";
// import { ThemeProvider } from "react-jss";
import PropTypes from "prop-types";
// import themeData from "../theme";
// import ButtonItem from "./item";

export function Menu(props) {
  const { children } = props;
  return (
    <div>{children}</div>
  );
}

Menu.propTypes = {
  children: PropTypes.node,
};

Menu.defaultProps = {
  children: "",
};

export default Menu;
