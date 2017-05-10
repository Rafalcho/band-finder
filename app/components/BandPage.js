import React from 'react';

class BandPage extends React.Component {
  render() {
    const name = this.props.band.name;
    const image = this.props.band.images[0].url;
    const genres = this.props.band.genres.join(', ');
    return (
      <div>
        <h2>{name}</h2>
        <p>{genres}</p>
        <img src={image} />

      </div>
    );
  }
}

export default BandPage;
