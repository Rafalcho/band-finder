import React from 'react';

class BandTopTracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      currentPlaying: null,
    }
  }

  handleClick = (event) => {
    const currentAudio =  event.currentTarget.querySelector('audio');

    if (this.state.isPlaying) {
      const nowPlaying = document.getElementById(this.state.currentPlaying);
      nowPlaying.pause();
      this.setState({
        isPlaying: false,
        currentPlaying: null,
      })
    } else {
      currentAudio.play();
      this.setState({
        isPlaying: true,
        currentPlaying: currentAudio.id
      })
    }
  }

  render() {
    return (
      <ul className='top-tracks'>
      {this.props.tracks.map((track, index) => {
          return (
            <li key={track.id} onClick={this.handleClick}>
              #{index + 1} { }
              {track.name}
              <audio id={track.id} src={track.preview_url} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BandTopTracks;
