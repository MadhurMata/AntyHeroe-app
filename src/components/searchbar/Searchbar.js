import React, { useState } from 'react';

export default function Searchbar() {
  const [search, setSearch] = useState('');

  const handleSubmit = () => {
    console.log('hola');
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <form className="searchbar-container" action="/" method="get">
        {/* {isMouseOver.value ? (
          <input
            className="searchbar-hover"
            type="text"
            onChange={handleChange}
            placeholder="Name of character"
            value={search}
          />
        ) : (
          <input
            className="searchbar-no-hover"
            type="text"
            onChange={handleChange}
            placeholder="Name of character"
            value={search}
          />
        )} */}
        <div
          className="search-button"
          onClick={handleSubmit}
          onKeyDown={handleSubmit}
          role="button"
          tabIndex={0}>
          <img src="/images/search.svg" alt="Search" />
        </div>
      </form>
    </div>
  );
}
