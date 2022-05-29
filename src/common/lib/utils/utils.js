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