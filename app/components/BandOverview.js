import React from 'react';

const BandOverview = (props) => {
  return (
    <div>

      <div className='band-picture' style={{backgroundImage: `url(${props.image})`}}>
        <h2>{props.name}</h2>
      </div>
      <p>Genres: {props.genres}</p>
    </div>

  );
};

export default BandOverview;
