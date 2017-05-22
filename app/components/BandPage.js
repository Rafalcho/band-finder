import React from 'react';
import {getAlbums, getSimilarArtists, getTopTracs} from '../utils/api';
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
    });

  }

  render() {
    const name = this.state.band.name;
    const image = this.state.band.images[0].url;
    const genres = this.state.band.genres;

    return (
      <div className='band-container' >
        <BandOverview name={name} image={image} genres={genres} />

        <h3>Top tracks</h3>
        {!this.state.tracks ? null : <BandTopTracks tracks={this.state.tracks} />}

        <h3>Albums</h3>
        {!this.state.albums ? null : <BandAlbums albums={this.state.albums} />}

        <h3>Want to hear something similar?</h3>
        <SimilarArtists id={this.state.band.id}/>
      </div>
    );
  }
}

export default BandPage;
