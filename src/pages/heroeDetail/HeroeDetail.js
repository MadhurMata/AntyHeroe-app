import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import { useFetch } from 'hooks/useFetch';
import { RegularList } from 'components/regularList/RegularList';
import EventCard from 'components/eventCard/EventCard';

export default function HeroeDetail() {
  const params = useParams();
  const { loading, data, error } = useFetch(`/characters/${params.heroeId}`);

  if (loading)
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );

  if (error) return JSON.stringify(error, null, 2);

  return (
    <Layout>
      <>
        <section className="heroe-detail-top-section">
          <div className="heroe-detail-top-section__img-container">
            <img
              src={`${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`}
              alt={data.data.results[0].name}
            />
          </div>
          <div className="heroe-detail-top-section__info-container">
            <h3>{data.data.results[0].name}</h3>
            <h5>{data.data.results[0].modified}</h5>
            <p>{data.data.results[0].description}</p>
          </div>
        </section>
        <section className="heroe-detail-bottom-section">
          {data.data.results[0].events.available > 0 ? (
            <>
              <h5>Events</h5>
              <RegularList
                items={data.data.results[0].events.items}
                resourceName="event"
                styles="regular-list"
                itemComponent={EventCard}
              />
            </>
          ) : null}
        </section>
      </>
    </Layout>
  );
}
