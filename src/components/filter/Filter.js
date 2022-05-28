import React, { useState, useEffect, useContext } from 'react';
import Searchbar from 'components/searchbar/Searchbar';
import Button from 'components/button/Button';
import CustomCheckbox from 'components/customCheckbox/CustomCheckbox';
import CustomSelect from 'components/customSelect/CustomSelect';

import { TreesContext } from 'pages/home/Home';

function Filter() {
  const [items, setItems] = useContext(TreesContext) || [];
  const [showFilter, setShowFilter] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (items && !checkbox) descriptionFilter();
  }, [checkbox]);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleCheckboxState = () => {
    setCheckbox(!checkbox);
  };

  const updateSelect = (value) => {
    setSelectValue(value);
  };

  const descriptionFilter = () => {
    const filteredData = items.filter((item) => item.description);
    setItems(filteredData);
    //setItems(filteredData);
  };

  const dateFilter = () => {
    if (checkbox) console.log('yyy');
  };

  const searchFilter = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="filter">
      <div className="filter_top">
        <Searchbar handleChange={searchFilter} searchValue={searchValue} />
        <Button toggleFilter={toggleFilter} />
      </div>
      {showFilter ? (
        <div className="filter_bottom">
          <CustomCheckbox
            toggleCheckboxState={toggleCheckboxState}
            checkbox={checkbox}
            label="Heroes with description only"
          />
          <CustomSelect updateSelect={updateSelect} />
        </div>
      ) : null}
    </div>
  );
}

export default Filter;
