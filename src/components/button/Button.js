import React from 'react';

function Button({ toggleFilter }) {
  return (
    <div
      className="button-container"
      role="button"
      tabIndex={0}
      onClick={() => toggleFilter()}
      onKeyDown={() => toggleFilter()}>
      <div className="link-button">
        <h4>Filter</h4>
        <span className="icon icon-arrow"></span>
      </div>
    </div>
  );
}

export default Button;
