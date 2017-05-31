import React from 'react';
import BandPage from './BandPage';
import {Link} from 'react-router-dom';
import {getToken} from '../utils/api';

class FindBand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      artist: event.currentTarget.value
    });

  };

  componentDidMount() {
    const accessURL = window.location.hash.slice(14,window.location.hash.length -34 );
    if(accessURL) {
      getToken(accessURL);

  }}

  render() {
    return (
      <div>
        <div className='search-container'>
          <h1>Find your favourite band or artist</h1>
          <input
            type='text'
            value={this.state.artist}
            onChange={this.handleChange}
            id='searchbox'/>
            <Link
              className='search-button'
              to={{
                pathname: '/band',
                search: this.state.artist
              }}
            >Find!</Link>

        <div className='random-box'>
          <p>Don't have favourite band?</p>
            <Link
              className='random-search'
              to={{
                pathname: '/band',
                search: 'random-artist'
              }}
            >Search for a random artist</Link>
        </div>
      </div>
    </div>
    );
  }
}

export default FindBand;
