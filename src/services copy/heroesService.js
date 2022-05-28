import axios from 'axios';

export const fetchHeroes = () => {
    return axios
        .get(
            `${process.env.REACT_APP_HEROES_BASE_URL}/public/characters?ts=10&apikey=${process.env.REACT_APP_APIKEY}&hash=${process.env.REACT_APP_HASH}`
        )
        .then((res) => {
            console.log('res', res);
            return res.data.data.results;
        });
};

export const searchHeroByName = (heroName) => {
    return axios
        .get(
            `${process.env.REACT_APP_HEROES_BASE_URL}/public/characters?name=${heroName}&ts=10&apikey=${process.env.REACT_APP_APIKEY}&hash=${process.env.REACT_APP_HASH}`
        )
        .then((res) => {
            console.log('res', res);
            return res.data.data.results;
        });
};
