import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function HeroCard({ heroe }) {
  const { thumbnail, name, description, id } = heroe;

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} className="App-logo" alt="logo" />
      </div>
      <div className="card-text-container">
        <div className="info-container">
          <h5 className="truncate">{name}</h5>
          <p className="truncate-multipleLine">
            {description !== '' ? description : '(No description available)'}
          </p>
        </div>
        <Link to={`/${name}/${id}`}>
          <div className="button-container">
            <div className="link-button">
              <h4>Read more</h4>
              <span className="icon icon-arrow"></span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

HeroCard.propTypes = {
  hero: PropTypes.object
};
