import React from 'react';
import { Link } from 'react-router-dom';

import errorImg from 'assets/images/404.png';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <img src={errorImg} alt="Work in progress" />
      <div>
        <h3>Ops...</h3>
        <h5>We did not found what you where looking for.</h5>
        <h5>
          You can return to the
          <Link to="/"> Home page</Link>
        </h5>
      </div>
    </div>
  );
}
