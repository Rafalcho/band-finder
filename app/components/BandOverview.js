import React from 'react';
import {Link} from 'react-router-dom';

const BandOverview = (props) => {
  const genres = props.genres.map(genre => {
    return <Link
      key={genre}
      className='genre'
      to={{
        pathname: '/genre',
        search: genre
      }}
    ><span>{genre}</span></Link>;
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
