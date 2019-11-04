import React from 'react';
// import Header from './components/Header';
// import Scene from './components/Scene';
// import Tools from './components/Tools';
import styles from "./button.css";

export function Button(props) {
  return (
    <div className={styles.button}>
      <button>
      {props.children}
      </button>
    </div>
  );
}

export default Button;