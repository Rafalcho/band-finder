import React from 'react';
import {artistSearch, randomArtistSearch} from '../utils/api';
import BandPage from './BandPage';
import Loading from './Loading';
import {Link} from 'react-router-dom';


class FindBand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      bandObject : null,
      id: null,
      hideSearch: false,
      loading: false,

    };
  }

  handleChange = (event) => {
    this.setState({
      artist: event.currentTarget.value
    });

  };

  handleSubmit = (artist) => {
    this.setState({
      loading: true,
      hideSearch: true,
    })

    const artistResponse = artistSearch(artist).then(
      data => {
        this.setState({
          bandObject: data,
          id: data.id,
          hideSearch: true,
          loading: false,
        })
      }
    )
  }

  handleSearchAgain = () => {
    this.setState({
      artist: '',
      bandObject : null,
      id: null,
      hideSearch: false,
    })
  };

handleRandom = () => {
  this.setState({
    loading: true,
    hideSearch: true,
  })

  randomArtistSearch().then(data => {
    this.setState({
      bandObject: data,
      id: data.id,
      hideSearch: true,
      loading: false,
    })
  })
}


  render() {
    return (
    <div>
    {!this.state.hideSearch ? null : <div
      className='search-again'
      onClick={this.handleSearchAgain}>Search again</div>}

    {this.state.hideSearch ? null :  <div className='search-container' >
        <h1>Find your favourite band or artist</h1>
        <input
          type='text'
          value={this.state.artist}
          onChange={this.handleChange}
          id='searchbox'/>
        <div className='search-button' onClick={() => this.handleSubmit(this.state.artist)}>
          Find!</div>

        <div className='random-box'>
          <p>Don't have favourite band?</p>
          <div onClick={this.handleRandom} className='random-search'>Search for a random artist</div>
        </div>

        <Link

          className='search-button'
          to={{
            pathname: '/band',
            search: this.state.artist
          }}
        >Battle</Link>

      </div>}

      {this.state.loading ? <Loading /> : null}

        {this.state.bandObject ?
          <BandPage band={this.state.bandObject}/> : null }



      </div>
    );
  }
}

export default FindBand;
