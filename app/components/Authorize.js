import React from 'react';

class Authorize extends React.Component {

  componentDidMount() {
    window.location.replace('https://accounts.spotify.com/authorize/?client_id=e2fe7bcb53c2443e96e7a4df25b309ed&response_type=token&redirect_uri=http://localhost:8080/&scope=user-read-private%20user-read-email');
  }

  render() {
    return (
      <h1>Please log in to Spotify to continue</h1>
    );
  }
}

export default Authorize;
