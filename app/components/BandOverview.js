import React from 'react';

const BandOverview = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} />
      <p>Genres: {props.genres}</p>
    </div>

  );
};

export default BandOverview;
