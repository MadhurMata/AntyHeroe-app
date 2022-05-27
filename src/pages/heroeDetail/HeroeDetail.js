import React from 'react';
import { useParams } from 'react-router-dom';
import { HeroesSource } from 'common/components/heroes-source/HeroesSource';
import HeroeInfo from 'components/heroeInfo/HeroeInfo';
import Layout from 'components/layout/Layout';

export default function HeroeDetail() {
  const params = useParams();

  return (
    <Layout>
      <div className="wrapper">
        <HeroesSource url={`/characters/${params.heroeId}`} type="heroe">
          <HeroeInfo />
        </HeroesSource>
      </div>
    </Layout>
  );
}
