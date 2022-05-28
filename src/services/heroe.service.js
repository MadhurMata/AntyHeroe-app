import axios from 'axios';

export const fetchHeroes = () => {
  return axios
    .get(
      `${process.env.REACT_APP_HEROES_BASE_URL}/characters?ts=10&apikey=${process.env.REACT_APP_APIKEY}&hash=${process.env.REACT_APP_HASH}`
    )
    .then((res) => {
      return res.data.data.results;
    });
};

export const searchHeroById = (heroId) => {
  return axios
    .get(
      `${process.env.REACT_APP_HEROES_BASE_URL}/public/charactersname/${heroId}?ts=10&apikey=${process.env.REACT_APP_APIKEY}&hash=${process.env.REACT_APP_HASH}`
    )
    .then((res) => {
      return res.data.data.results;
    });
};
