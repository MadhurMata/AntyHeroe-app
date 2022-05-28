import React, { createContext, useState, useEffect } from 'react';

import { RegularList } from 'components/regularList/RegularList';
import HeroCard from 'components/heroCard/HeroCard';
import Layout from 'components/layout/Layout';
import Filter from 'components/filter/Filter';
import { useFetch } from 'hooks/useFetch';

export const TreesContext = createContext();

function Home() {
  const { loading, data, error } = useFetch('/characters');
  const [items, setItems] = useState();

  useEffect(() => {
    if (data) setItems(data.data.results);
  }, [data]);

  return (
    <Layout>
      <TreesContext.Provider value={[items, setItems]}>
        <Filter />
        <RegularList
          items={data}
          loading={loading}
          error={error}
          resourceName="heroe"
          itemComponent={HeroCard}
        />
      </TreesContext.Provider>
    </Layout>
  );
}

export default Home;
