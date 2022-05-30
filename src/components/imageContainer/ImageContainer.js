import React from 'react';

function ImageContainer({ url, stylesProp, altSource }) {
  return (
    <div className={stylesProp}>
      <img src={url} alt={altSource} />
    </div>
  );
}

export default ImageContainer;
