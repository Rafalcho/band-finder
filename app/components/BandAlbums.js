import React from 'react';
import Album from './Album';
import {Link} from 'react-router-dom';

class BandAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsToShow: null,
      index: 0,
      currentAlbum: null,
    }
  }

getMoreAlbums = () => {
  const albumsPart = this.props.albums.slice(0, this.state.index + 4);
  this.setState({
    albumsToShow: albumsPart,
    index: this.state.index + 4,
  })
};

componentDidMount() {
  this.getMoreAlbums();
}

handleClick = (id) => {
  this.setState({ currentAlbum: id})
}

  render() {
    return (
      <div className='albums-section'>


      <div className='albums-row'>


      {this.state.albumsToShow ? this.state.albumsToShow.map(album => {

        return (
          <div
            className='album-item'
            key={album.id}
            onClick={() => this.handleClick(album.id)}>
            <img src={album.images[1].url} />
            <p>{album.name}</p>
              <Link

                className='album-item'
                to={{
                  pathname: '/album',
                  search: album.id
                }}
              >Battle</Link>
          </div>
        );
      }) : null}


      </div>
      {this.state.index >= this.props.albums.length ? null : <div
        onClick={this.getMoreAlbums}
        className='show-more' >Show more albums</div>}
        {this.state.currentAlbum ? <Album id={this.state.currentAlbum} /> : null}
</div>
    );
  }
}

export default BandAlbums;
