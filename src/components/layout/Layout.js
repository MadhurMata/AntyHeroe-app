import React from 'react';

import Header from 'components/header/Header';

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
