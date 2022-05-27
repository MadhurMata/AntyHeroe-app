import React from 'react';
import { Link } from 'react-router-dom';

import errorImg from 'assets/images/404.png';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <img src={errorImg} alt="Work in progress" />
      <div>
        <h3>Ops...</h3>
        <p>We did not found what you where looking for.</p>
        <p>
          You can return to the
          <Link to="/" className="link">
            <span> Home page</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
