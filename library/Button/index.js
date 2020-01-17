import React from 'react';
import { ThemeProvider } from "react-jss";
import PropTypes from 'prop-types';
import themeData from "../theme";
import ButtonComponent from "./Button";

export function Button(props) {
  
  return (
    <ThemeProvider theme={themeData}>
      <ButtonComponent>
      {props.children}
      </ButtonComponent>
    </ThemeProvider>
  );
}

Button.propTypes = {
  children: PropTypes.node
}

export default Button;