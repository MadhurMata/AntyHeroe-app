import React from 'react';

function EventCard({ event }) {
  console.log('event', event);
  return <div>{event.name}</div>;
}

export default EventCard;
