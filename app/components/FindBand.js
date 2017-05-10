import React from 'react';
import {artistSearch} from '../utils/api';

class FindBand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      artist: event.currentTarget.value
    });

  };

  render() {
    return (
      <div className='search-container'>
        <h1>Find your favourite band or artist</h1>
        <input
          type='text'
          value={this.state.artist}
          onChange={this.handleChange}/>
        <button onClick={() => artistSearch(this.state.artist)}>Go!</button>
      </div>
    );
  }
}

export default FindBand;
