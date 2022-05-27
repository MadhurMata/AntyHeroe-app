import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { mapHeroesData } from 'common/lib/utils';
import { mapHeroeData } from 'common/lib/utils';

export const HeroesSource = ({ url, children, type }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_HEROES_BASE_URL}${url}?ts=10&apikey=${process.env.REACT_APP_APIKEY}&hash=${process.env.REACT_APP_HASH}`
      );
      let mapedData;
      if (type === 'heroes') mapedData = await mapHeroesData(response.data.data.results);
      else mapedData = await mapHeroeData(response.data.data.results);
      setState(mapedData);
    })();
  }, [url]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { data: state });
        }

        return child;
      })}
    </>
  );
};
