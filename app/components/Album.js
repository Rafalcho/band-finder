import React from 'react';
import {getAlbumTracks, getAlbum} from '../utils/api';
import queryString from 'query-string';
import Loading from './Loading';
import Nav from './Nav';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: null,
      tracks: null,
    };
  }

  componentDidMount() {
    const albumId = this.props.location.search.slice(1);

    const getAlbumPromise = getAlbum(albumId).then(data => {

      this.setState({
        album: data,
      });
    });

    const getTracksPromise = getAlbumTracks(albumId).then(data => {

      this.setState({
        tracks: data,
      });
    });
  }

  render() {
    if (this.state.album) {
      return (
        <div>
          <Nav />
          <img src={this.state.album.images[1].url} />
          <h1>{this.state.album.name}</h1>
        </div>
      );
    } else {
      return <Loading />;
    }
  }

}

export default Album;
