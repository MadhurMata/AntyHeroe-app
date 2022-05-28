import React from 'react';

function CustomSelect({ updateSelect }) {
  return (
    <label className="select-custom">
      <select
        name="select"
        className="select-custom__select"
        onChange={(e) => updateSelect(e.target.value)}>
        <option value="">Filter by date (No filter)</option>
        <option value="0">{'Modefied date < xxx'} </option>
        <option value="1">{'Modefied date > xxx'}</option>
      </select>
      <div className="select-custom__caret"></div>
    </label>
  );
}

export default CustomSelect;
