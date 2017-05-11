import React from 'react';

class BandTopTracks extends React.Component {
  render() {
    return (
      <ul>
      {  this.props.tracks.map(track => {
          return (
            <li key={track.id}>
              <img src={track.album.images[2].url} />
              {track.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BandTopTracks;
