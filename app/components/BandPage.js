import React from 'react';
import {getAlbums, getSimilarArtists} from '../utils/api';

class BandPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: null,
      similar: null,
    };
  }

  componentDidMount() {
    const albumsPromise = getAlbums(this.props.band.id).then(data => {
      this.setState({
        albums: data,
      });
    });
  }

  handleGetSimilarClick = (id) => {
      const similarPromise = getSimilarArtists(this.props.band.id).then(data => {
        this.setState({
          similar: data,
        });
      });
    };

  render() {
    const name = this.props.band.name;
    const image = this.props.band.images[1].url;
    const genres = this.props.band.genres.join(', ');

    return (
      <div className='band-container'>
        <h2>{name}</h2>
        <img src={image} />
        <p>Genres: {genres}</p>
        <h3>Albums</h3>
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
        <button
          onClick={() => this.handleGetSimilarClick(this.props.band.id)}>
          Show similar artists
        </button>
        <div className='albums-row'>
      {  !this.state.similar ? null : this.state.similar.map(artist => {
        return (
          <div className='similar-artist'>
            <img src={artist.images[1].url}></img>
            <p>{artist.name}</p>
          </div>
        )
      })}
      </div>
      </div>
    );
  }
}

export default BandPage;
