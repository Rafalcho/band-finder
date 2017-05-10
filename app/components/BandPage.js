import React from 'react';
import {getAlbums} from '../utils/api';

class BandPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: null,
    };
  }

  componentDidMount() {
    const albumsPromise = getAlbums(this.props.band.id).then(data => {
      this.setState({
        albums: data,
      });
    });
  }

  render() {
    const name = this.props.band.name;
    const image = this.props.band.images[0].url;
    const genres = this.props.band.genres.join(', ');

    return (
      <div className='band-container'>
        <h2>{name}</h2>
        <p>{genres}</p>
        <img src={image} />
        <div className='albums-row'>


        {this.state.albums ? this.state.albums.map(album => {

          return (
            <div className='album-item'>
              <img src={album.images[1].url} />
              <p>{album.name}</p>
            </div>
          );
        }) : null}
        </div>
      </div>
    );
  }
}

export default BandPage;
