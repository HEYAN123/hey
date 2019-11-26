import React from 'react';
import { useTheme } from "react-jss"
import buttonStyle from "./buttonStyle";

export function ButtonComponent(props) {
  const theme = useTheme();
  console.log(theme);
  const classes = buttonStyle({ theme });
  console.log(theme);
  return (
    <div>
      <button className={classes.myButton}>
      {props.children}
      </button>
    </div>
  );
}

export default ButtonComponent;