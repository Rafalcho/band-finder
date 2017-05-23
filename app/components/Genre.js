import React from 'react';
import queryString from 'query-string';
import {getArtistsByGenre} from '../utils/api';
import Loading from './Loading';
import Nav from './Nav';
import {Link} from 'react-router-dom';

class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: null,
      genre: this.props.location.search.slice(1),
    };
  }

  componentDidMount() {
    const genreName = this.props.location.search.slice(1).split(' ').join('-');

    getArtistsByGenre(genreName).then(data => {

        this.setState({
          artists: data,
        });
      });
  }

  render() {
    if (this.state.artists) {
      return (
        <div>
          <Nav />

          <div className='genre-container'>
            <h1>Feel like listening to some {this.state.genre} ?</h1>


            <div className='albums-row'>
              {this.state.artists.map(artist => {
                return (
                  <Link
                    className='similar-artist'
                     key={artist.id}
                    to={{
                      pathname: '/band',
                      search: artist.name
                    }}>
                    <div
                      className='similar-image'
                      style={{backgroundImage: `url('${artist.images[1].url}')`}}>

                    </div>
                    <p>{artist.name}</p>

                  </Link>
                );
              })}
            </div>

          </div>

        </div>
      );
    } else {
      return <Loading />;
    }

  }
}

export default Genre;
