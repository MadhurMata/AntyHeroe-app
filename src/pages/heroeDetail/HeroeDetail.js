import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import { useFetch } from 'hooks/useFetch';
import { RegularList } from 'components/regularList/RegularList';
import EventCard from 'components/eventCard/EventCard';
import { mapHeroeData } from 'common/lib/utils/utils';

export default function HeroeDetail() {
  const params = useParams();
  const { loading, data, error } = useFetch(`/characters/${params.heroeId}`);
  const [heroe, setHeroe] = useState();

  useEffect(() => {
    if (data) {
      setHeroe(mapHeroeData(data.data.results[0]));
    }
  }, [data]);

  return (
    <Layout>
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : error ? (
        <div>
          <h5>Error loading data!...</h5>
        </div>
      ) : (
        heroe && (
          <>
            <section className="heroe-detail-top-section">
              <div className="heroe-detail-top-section__img-container">
                <img
                  src={`${heroe.thumbnail.path}.${heroe.thumbnail.extension}`}
                  alt={heroe.name}
                />
              </div>
              <div className="heroe-detail-top-section__info-container">
                <h3>{heroe.name}</h3>
                <h5>{heroe.modified}</h5>
                <p>{heroe.description}</p>
              </div>
            </section>
            <section className="heroe-detail-bottom-section">
              {heroe.events.available > 0 ? (
                <>
                  <h5>Events</h5>
                  <RegularList
                    items={heroe.events.items}
                    resourceName="event"
                    styles="regular-list"
                    itemComponent={EventCard}
                  />
                </>
              ) : null}
            </section>
          </>
        )
      )}
    </Layout>
  );
}
