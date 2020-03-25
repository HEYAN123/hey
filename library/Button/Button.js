import React from "react";
import { ThemeProvider } from "react-jss";
import PropTypes from "prop-types";
import themeData from "../theme";
import ButtonComponent from "./button-component";

export function Button(props) {
  const { children } = props;
  return (
    <ThemeProvider theme={themeData}>
      <ButtonComponent>
        {children}
      </ButtonComponent>
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
