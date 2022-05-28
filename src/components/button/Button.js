import React from 'react';

function Button({ action, imageUrl, textContent }) {
  return (
    <div
      className="button"
      role="button"
      tabIndex={0}
      onClick={() => action()}
      onKeyDown={() => action()}>
      <h4>{textContent}</h4>
      <span className={'icon ' + imageUrl}></span>
    </div>
  );
}

export default Button;
