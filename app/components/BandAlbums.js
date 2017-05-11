import React from 'react';

class BandAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsToShow: null,
      index: 0,
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

  render() {
    return (
      <div>


      <div className='albums-row'>


      {this.state.albumsToShow ? this.state.albumsToShow.map(album => {

        return (
          <div className='album-item' key={album.id}>
            <img src={album.images[1].url} />
            <p>{album.name}</p>
          </div>
        );
      }) : null}


      </div>
      {this.state.index >= 20 ? null : <button onClick={this.getMoreAlbums}>Show more</button>}
</div>
    );
  }
}

export default BandAlbums;
