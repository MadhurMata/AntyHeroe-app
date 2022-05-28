import React from 'react';

function Button({ toggleFilter }) {
  return (
    <div
      className="button"
      role="button"
      tabIndex={0}
      onClick={() => toggleFilter()}
      onKeyDown={() => toggleFilter()}>
      <h4>Filter</h4>
      <span className="icon icon-arrow"></span>
    </div>
  );
}

export default Button;
