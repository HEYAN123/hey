import React from 'react';
// import Header from './components/Header';
// import Scene from './components/Scene';
// import Tools from './components/Tools';

export function Button(props) {
  return (
    <div>
      <button>
      {props.children}
      </button>
    </div>
  );
}

export default Button;