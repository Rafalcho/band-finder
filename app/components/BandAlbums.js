import React from 'react';

class BandAlbums extends React.Component {
  render() {
    return (

      <div className='albums-row'>
          

      {this.props.albums ? this.props.albums.map(album => {

        return (
          <div className='album-item' key={album.id}>
            <img src={album.images[1].url} />
            <p>{album.name}</p>
          </div>
        );
      }) : null}
      </div>
    );
  }
}

export default BandAlbums;
