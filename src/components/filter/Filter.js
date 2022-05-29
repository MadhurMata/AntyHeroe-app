import React, { useState, useEffect, useContext } from 'react';
import Searchbar from 'components/searchbar/Searchbar';
import Button from 'components/button/Button';
import CustomCheckbox from 'components/customCheckbox/CustomCheckbox';
import CustomSelect from 'components/customSelect/CustomSelect';

import { TreesContext } from 'pages/home/Home';

const selectOptions = ['Filter by date (Not filtered)', '20 century', '21 century'];

function Filter() {
  const [items, items2, setItems] = useContext(TreesContext) || [];
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

  const dateFilter = (filteredData) => {
    switch (selectValue) {
      case '1':
        filteredData = filteredData.filter((item) => item.modified < '2000');
        break;
      case '2':
        filteredData = filteredData.filter((item) => item.modified >= '2000');
        break;
      default:
        filteredData;
        break;
    }
    return filteredData;
  };

  const descriptionFilter = () => {
    return checkbox ? items2.filter((item) => item.description) : items2;
  };

  const searchFilter = (filteredData) => {
    return searchValue
      ? filteredData.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
      : filteredData;
  };

  const filter = () => {
    let filteredData = descriptionFilter();
    filteredData = dateFilter(filteredData);
    filteredData = searchFilter(filteredData);

    setItems(filteredData);
  };

  return (
    <div className="filter">
      <div className="filter_top">
        <Searchbar handleChange={updateSearchValue} searchValue={searchValue} />
        <Button action={toggleFilter} textContent="Filter" imageUrl="icon-filter" />
      </div>
      {showFilter ? (
        <div className="filter_bottom">
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
