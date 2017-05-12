import React from 'react';
import {getAlbums, getSimilarArtists, getTopTracs} from '../utils/api';
import BandAlbums from './BandAlbums';
import BandTopTracks from './BandTopTracks';
import BandOverview from './BandOverview';

class BandPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: null,
      similar: null,
      tracks: null,
      similarShown: false,
    };
  }

  componentDidMount() {

    const topTracksPromise = getTopTracs(this.props.band.id).then(data => {
      console.log(data);
      this.setState({
        tracks: data,
      })
    })

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
          similarShown: true,
        });
      });
    };

    componentWillUnmount() {
      this.setState({
        albums: null,
        similar: null,
        tracks: null,
      })

    }

  render() {
    const name = this.props.band.name;
    const image = this.props.band.images[0].url;
    const genres = this.props.band.genres;

    return (
      <div className='band-container' >
        <BandOverview name={name} image={image} genres={genres} />

        <h3>Top tracks</h3>
        {!this.state.tracks ? null : <BandTopTracks tracks={this.state.tracks} />}

        <h3>Albums</h3>
        {!this.state.albums ? null : <BandAlbums albums={this.state.albums} />}

        <h3>Want to hear something similar?</h3>
        {this.state.similarShown ? null : <div className='show-more similar'
          onClick={() => this.handleGetSimilarClick(this.props.band.id)}>
          Show similar artists
        </div>}
        <div className='albums-row'>
      {  !this.state.similar ? null : this.state.similar.map(artist => {
        return (
          <div className='similar-artist' key={artist.id}>

            <div className='similar-image'
              style={{backgroundImage: `url('${artist.images[1].url}')`}}></div>
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
