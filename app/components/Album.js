import React from 'react';
import {getAlbumTracks, getAlbum} from '../utils/api';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: null,
      tracks: null,
    };
  }

  componentDidMount() {

    const getAlbumPromise = getAlbum(this.props.id).then(data => {

      this.setState({
        album: data,
      });
    });

    const getTracksPromise = getAlbumTracks(this.props.id).then(data => {

      this.setState({
        tracks: data,
      });
    });
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Album;
