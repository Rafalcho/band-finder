import React from 'react';

class BandTopTracks extends React.Component {

  render() {
    let number = 1;
    return (
      <ul className='top-tracks'>
      {  this.props.tracks.map((track, index) => {
          return (
            <li key={track.id}>
              #{index + 1} { }
              {track.name}
            </li>
          );

        })}
      </ul>
    );
  }
}

export default BandTopTracks;
