import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "react-jss";
import buttonStyle from "./styles";

function ButtonItem(props) {
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

ButtonItem.propTypes = {
  children: PropTypes.node,
};

ButtonItem.defaultProps = {
  children: "",
};

export default ButtonItem;
