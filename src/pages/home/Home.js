import React from 'react';

import { RegularList } from 'components/regularList/RegularList';
import HeroCard from 'components/heroCard/HeroCard';
import { HeroesSource } from 'common/components/heroes-source/HeroesSource';
import Layout from 'components/layout/Layout';
import Filter from 'components/filter/Filter';

function Home() {
  return (
    <Layout>
      <div className="wrapper">
        <HeroesSource url="/characters" type="heroes">
          <Filter />
          <RegularList resourceName="heroe" itemComponent={HeroCard} />
        </HeroesSource>
      </div>
    </Layout>
  );
}

export default Home;
