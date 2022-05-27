import React from 'react';

function CustomCheckbox({ checkbox, toggleCheckboxState, label }) {
  return checkbox ? (
    <div className="form-checkbox">
      <input
        type="checkbox"
        id="checkbox2"
        checked="checked"
        onChange={() => toggleCheckboxState()}
        onKeyDown={() => toggleCheckboxState()}
      />
      <label htmlFor="checkbox2">{label}</label>
    </div>
  ) : (
    <div className="form-checkbox">
      <input
        type="checkbox"
        id="checkbox1"
        onChange={() => toggleCheckboxState()}
        onKeyDown={() => toggleCheckboxState()}
      />
      <label htmlFor="checkbox1">{label}</label>
    </div>
  );
}

export default CustomCheckbox;
