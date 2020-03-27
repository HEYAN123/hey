import React from "react";


// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="page-wrapper">
      {children}
    </div>
  );
}

Layout.prototype = {
  children: React.node,
};
