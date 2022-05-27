import React, { useState, useEffect } from 'react';
import Searchbar from 'components/searchbar/Searchbar';
import Button from 'components/button/Button';
import CustomCheckbox from 'components/customCheckbox/CustomCheckbox';
import CustomSelect from 'components/customSelect/CustomSelect';

function Filter({ data }) {
  const [items, setItems] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  console.log('items', data);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleCheckboxState = () => {
    setCheckbox(!checkbox);
    console.log('Filter', checkbox);
  };

  const updateSelect = (value) => {
    setSelectValue(value);
  };

  const descriptionFilter = () => {
    if (checkbox) {
      const filteredData = items.filter((item) => !item.description);
      setItems(filteredData);
    }
  };

  const dateFilter = () => {
    if (checkbox) console.log('yyy');
  };

  const searchFilter = (value) => {
    setFilterValue(value);
    console.log('filterValue, filterValue);
  };

  return (
    <>
      <div>
        <Searchbar searchFilter={searchFilter} />
        <Button toggleFilter={toggleFilter} />
      </div>
      {showFilter ? (
        <>
          <CustomCheckbox
            toggleCheckboxState={toggleCheckboxState}
            checkbox={checkbox}
            label="Heroes with description only"
          />
          <CustomSelect updateSelect={updateSelect} />
        </>
      ) : null}
    </>
  );
}

export default Filter;
