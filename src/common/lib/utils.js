export const mapHeroesData = (heroesList) => {
  return heroesList.map((heroe) => {
    const { name, id, description, thumbnail } = heroe;
    return {
      name,
      id,
      description,
      thumbnail
    };
  });
};

export const mapHeroeData = (heroe) => {
  const { name, description, thumbnail, events, modefied } = heroe[0];

  return {
    name,
    description,
    thumbnail,
    events,
    modefied
  };
};
