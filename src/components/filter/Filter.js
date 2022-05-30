import React, { useState, useEffect, useContext } from 'react';
import Searchbar from 'components/searchbar/Searchbar';
import Button from 'components/button/Button';
import CustomCheckbox from 'components/customCheckbox/CustomCheckbox';
import CustomSelect from 'components/customSelect/CustomSelect';

import { TreesContext } from 'pages/home/Home';
import { dateFilter, descriptionFilter, searchFilter } from 'common/lib/utils/utils';

const selectOptions = ['Filter by date (Not filtered)', '20 century', '21 century'];

function Filter() {
  const [items, itemsTemp, setItems] = useContext(TreesContext) || [];
  const [showFilter, setShowFilter] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (items) filter();
  }, [checkbox, searchValue, selectValue]);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleCheckboxState = () => {
    setCheckbox(!checkbox);
  };

  const updateSelect = (value) => {
    setSelectValue(value);
  };

  const updateSearchValue = (value) => {
    setSearchValue(value);
  };

  /* Filters array of heroes everytime one of the inputs changes */
  const filter = () => {
    let filteredData = checkbox ? descriptionFilter(itemsTemp) : itemsTemp;
    filteredData = dateFilter(filteredData, selectValue);
    filteredData = searchValue ? searchFilter(filteredData, searchValue) : filteredData;

    setItems(filteredData);
  };

  return (
    <div className="filter">
      <div className="filter_shown">
        <Searchbar handleChange={updateSearchValue} searchValue={searchValue} />
        <Button action={toggleFilter} textContent="Filter" imageUrl="icon-filter" />
      </div>
      {showFilter ? (
        <div className="filter_hidden">
          <CustomCheckbox
            toggleCheckboxState={toggleCheckboxState}
            checkbox={checkbox}
            label="Heroes with description only"
          />
          <CustomSelect updateSelect={updateSelect} selectOptions={selectOptions} />
        </div>
      ) : null}
    </div>
  );
}

export default Filter;
