import React from 'react';

const BandOverview = (props) => {
  const genres = props.genres.map(genre => {
    return <span key={genre} className='genre'>{genre}</span>;
  });
  return (
    <div>

      <div className='band-picture' style={{backgroundImage: `url(${props.image})`}}>
        <h2>{props.name}</h2>
      </div>
      <div className='genres'>

        {genres}
      </div>

    </div>

  );
};

export default BandOverview;
