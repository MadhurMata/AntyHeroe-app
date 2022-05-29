export const mapHeroesData = (heroesList) => {
  return heroesList.map((heroe) => {
    const { name, id, description, thumbnail, modified } = heroe;
    return {
      id,
      name,
      description,
      thumbnail,
      modified: dateFormater(modified)
    };
  });
};

export const mapHeroeData = (heroe) => {
  const { name, description, thumbnail, events, modified } = heroe;

  return {
    name,
    description,
    thumbnail,
    events,
    modified: dateFormater(modified)
  };
};

export const dateFormater = (date) => {
  return new Date(date).getFullYear();
};

export const dateFilter = (filteredData, selectValue) => {
  switch (selectValue) {
    case '1':
      filteredData = filteredData.filter((item) => item.modified < 2000);
      break;
    case '2':
      filteredData = filteredData.filter((item) => item.modified >= 2000);
      break;
    default:
      filteredData;
      break;
  }
  return filteredData;
};

export const descriptionFilter = (itemsTemp) => {
  return itemsTemp.filter((item) => item.description);
};

export const searchFilter = (filteredData, searchValue) => {
  return filteredData.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
};
