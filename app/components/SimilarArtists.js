import React from 'react';
import {getSimilarArtists, getArtist} from '../utils/api';

class SimilarArtists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      similarShown: false,
      similar: null,
    }
  }

  handleGetSimilarClick = () => {
      const similarPromise = getSimilarArtists(this.props.id).then(data => {
        this.setState({
          similar: data,
          similarShown: true,
        });
      });
    };

  handleClick = (id) => {

    this.props.getArtist(id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      similarShown: false,
      similar: null,
    })
  }

  render() {
    return (
      <div>
        {this.state.similarShown ? null : <div className='show-more similar'
          onClick={() => this.handleGetSimilarClick()}>
          Show similar artists
        </div>}
        <div className='albums-row'>
          {  !this.state.similar ? null : this.state.similar.map(artist => {
        return (
          <div className='similar-artist' key={artist.id}
            onClick={() => this.handleClick(artist.id)}>

            <div
              className='similar-image'
              style={{backgroundImage: `url('${artist.images[1].url}')`}}>
            </div>
            <p>{artist.name}</p>
          </div>
        )
      })}
      </div>
      </div>
    )
  }
}

export default SimilarArtists;
