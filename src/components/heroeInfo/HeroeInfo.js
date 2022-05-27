import React from 'react';

function HeroeInfo({ data }) {
  return data ? (
    <div>hola {data.name}</div>
  ) : (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
}

export default HeroeInfo;
