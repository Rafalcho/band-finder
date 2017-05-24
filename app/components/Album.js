import React from 'react';
import {getAlbum} from '../utils/api';
import queryString from 'query-string';
import Loading from './Loading';
import Nav from './Nav';
import {Link} from 'react-router-dom';

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
  }

  render() {
    if (this.state.album) {
      return (
        <div>
          <Nav />
            <div className='album-container'>
              <div className='album-top'>
                <img src={this.state.album.images[1].url} />
                <div className='album-info'>
                  <h1>{this.state.album.name}</h1>
                    <Link
                      className='band-name'
                      to={{
                        pathname: '/band',
                        search: this.state.album.artists[0].name
                      }}
                    ><h2>{this.state.album.artists[0].name}</h2></Link>
                  <h3>{this.state.album.release_date.slice(0, 4)}</h3>
                </div>

              </div>
                <h2 className='tracks'>Tracks</h2>

                <ul className='top-tracks'>
                {  this.state.album.tracks.items.map((track, index) => {
                    return (
                      <li key={track.id}>
                        <a href={track.external_urls.spotify} target='_blank'>
                        #{index + 1} { }
                        {track.name}
                        </a>
                      </li>
                    );

                  })}
                </ul>
              </div>
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

export default Album;
