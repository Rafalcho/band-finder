import React from 'react';
import {getAlbums, getSimilarArtists, getTopTracs, getArtist} from '../utils/api';
import BandAlbums from './BandAlbums';
import BandTopTracks from './BandTopTracks';
import BandOverview from './BandOverview';
import SimilarArtists from './SimilarArtists';

class BandPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: null,
      tracks: null,
      band: this.props.band,
      id: this.props.band.id,
    };
  }

  componentDidMount() {

    const topTracksPromise = getTopTracs(this.state.band.id).then(data => {

      this.setState({
        tracks: data,
      });
    });

    const albumsPromise = getAlbums(this.state.band.id).then(data => {
      this.setState({
        albums: data,
      });
    });
  }

  componentWillUnmount() {
    this.setState({
      albums: null,
      similar: null,
      tracks: null,
      id: null
    });

  }

getArtstFromSimilarArtist = (artistId) => {
    getArtist(artistId).then(data => {
      this.setState({
        albums: null,
        similar: null,
        tracks: null,
        id: null
      });

      const topTracksPromise = getTopTracs(artistId).then(data => {

        this.setState({
          tracks: data,
        });
      });

      const albumsPromise = getAlbums(artistId).then(data => {
        this.setState({
          albums: data,
        });
      });

      this.setState({
        band: data,
        id: artistId,
      });

      scroll(0,0);
    })
  };




  render() {
    const name = this.state.band.name;
    const image = this.state.band.images[0].url;
    const genres = this.state.band.genres;
    const tracks = this.state.tracks;
    const albums = this.state.albums;
    const id = this.state.id;

    return (
      <div className='band-container' >
        <BandOverview name={name} image={image} genres={genres} />

        <h3>Top tracks</h3>
        {!this.state.tracks ? null : <BandTopTracks tracks={tracks} />}

        <h3>Albums</h3>
        {!this.state.albums ? null : <BandAlbums albums={albums} />}

        <h3>Want to hear something similar?</h3>
        <SimilarArtists
          id={id}
          getArtist={this.getArtstFromSimilarArtist}/>
      </div>
    );
  }
}

export default BandPage;
