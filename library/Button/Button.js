import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "react-jss";
import buttonStyle from "./buttonStyle";

function ButtonComponent(props) {
  const theme = useTheme();
  const classes = buttonStyle({ theme });
  const { children } = props;
  return (
    <div>
      <button type="button" className={classes.myButton}>
        {children}
      </button>
    </div>
  );
}

ButtonComponent.propTypes = {
  children: PropTypes.node,
};

ButtonComponent.defaultProps = {
  children: "",
};

export default ButtonComponent;
