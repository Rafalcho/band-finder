import React from 'react';
import {getAlbums, getSimilarArtists, getTopTracs, randomArtistSearch, artistSearch, getArtist} from '../utils/api';
import BandAlbums from './BandAlbums';
import BandTopTracks from './BandTopTracks';
import BandOverview from './BandOverview';
import SimilarArtists from './SimilarArtists';
import queryString from 'query-string';
import Loading from './Loading';
import Nav from './Nav';


class BandPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: null,
      tracks: null,
      band: null,
      id: null,
    };
  }

  componentDidMount() {
    let artistName = this.props.location.search.slice(1);
    console.log(artistName)

    if (artistName === 'randomize') {
      randomArtistSearch().then(
        data => {
          this.setState({
            band: data,
            id: data.id,
          })
        }
      )
    } else {
      const artistResponse = artistSearch(artistName).then(
        data => {
          this.setState({
            band: data,
            id: data.id,
          })
        }
      )
    }



  }

  shouldComponentUpdate() {
    if (this.state.albums && this.state.tracks) {
      return false
    } else {
      return true
    }
  }

componentDidUpdate(nextProps, nextState) {
  const topTracksPromise = getTopTracs(this.state.id).then(data => {

    this.setState({
      tracks: data,
    });
  });

  const albumsPromise = getAlbums(this.state.id).then(data => {
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

    if(this.state.band) {
      const name = this.state.band.name;
      const image = this.state.band.images[0].url;
      const genres = this.state.band.genres;
      const tracks = this.state.tracks;
      const albums = this.state.albums;
      const id = this.state.id;

      return (
      <div>
        <Nav />
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
      </div>
      )
    } else { return <Loading />}

  }
}

export default BandPage;
