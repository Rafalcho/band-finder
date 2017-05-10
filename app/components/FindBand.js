import React from 'react';
import {artistSearch} from '../utils/api';
import BandPage from './BandPage'


class FindBand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      bandObject : null,
    };
  }

  handleChange = (event) => {
    this.setState({
      artist: event.currentTarget.value
    });

  };

  handleSubmit = (artist) => {
    const response = artistSearch(artist).then(
      data => {
        this.setState({
          bandObject: data
        })
      }
    )



  }

  render() {
    return (
      <div className='search-container'>
        <h1>Find your favourite band or artist</h1>
        <input
          type='text'
          value={this.state.artist}
          onChange={this.handleChange}/>
        <button onClick={() => this.handleSubmit(this.state.artist)}>Go!</button>

{this.state.bandObject ? <BandPage band={this.state.bandObject}/> : null}
      </div>
    );
  }
}

export default FindBand;
