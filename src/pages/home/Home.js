import React, { createContext, useState, useEffect } from 'react';

import { RegularList } from 'components/regularList/RegularList';
import HeroCard from 'components/heroCard/HeroCard';
import Layout from 'components/layout/Layout';
import Filter from 'components/filter/Filter';
import { useFetch } from 'hooks/useFetch';
import { mapHeroesData } from '../../common/lib/utils/utils';

export const TreesContext = createContext();

function Home() {
  const { loading, data, error } = useFetch('/characters');
  const [items, setItems] = useState();
  const [itemsTemp, setItemsTemp] = useState();
  useEffect(() => {
    if (data) {
      setItems(mapHeroesData(data.data.results));
      setItemsTemp(mapHeroesData(data.data.results));
    }
  }, [data]);

  return (
    <Layout>
      <TreesContext.Provider value={[items, itemsTemp, setItems]}>
        <Filter />
        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <div>
            <h5>Error loading data!...</h5>
          </div>
        ) : (
          items && (
            <RegularList
              items={items}
              resourceName="heroe"
              emptyItemsMessage={`Sorry we couldn't find any heroe`}
              styles="list-grid"
              itemComponent={HeroCard}
            />
          )
        )}
      </TreesContext.Provider>
    </Layout>
  );
}

export default Home;
