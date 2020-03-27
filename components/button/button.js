import React from "react";
import { ThemeProvider } from "react-jss";
import PropTypes from "prop-types";
import themeData from "../theme";
import ButtonItem from "./item";

export function Button(props) {
  const { children } = props;
  return (
    <ThemeProvider theme={themeData}>
      <ButtonItem>
        {children}
      </ButtonItem>
    </ThemeProvider>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: "",
};

export default Button;
