import React from 'react';
import {artistSearch} from '../utils/api';
import BandPage from './BandPage'


class FindBand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      bandObject : null,
      id: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      artist: event.currentTarget.value
    });

  };

  handleSubmit = (artist) => {
    this.setState({
      artist: '',
      bandObject : null,
      id: null,
    })
    const artistResponse = artistSearch(artist).then(
      data => {
        this.setState({
          bandObject: data,
          id: data.id,
        })
      }
    )
  }



  render() {
    return (
    <div>


      <div className='search-container' >
        <h1>Find your favourite band or artist</h1>
        <input
          type='text'
          value={this.state.artist}
          onChange={this.handleChange}
          id='searchbox'/>
        <button onClick={() => this.handleSubmit(this.state.artist)}>
          Find!</button>
        </div>

        {this.state.bandObject ?
          <BandPage band={this.state.bandObject}/> : null }

      </div>
    );
  }
}

export default FindBand;
