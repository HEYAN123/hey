import React from 'react';
import { ThemeProvider } from "react-jss"
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

export default Button;