import React from 'react';

class FindBand extends React.Component {
  render() {
    return (
      <div className='search-container'>
        <h1>Find your favourite band or artist</h1>
        <input type='text' />
        <button>Go!</button>
      </div>
    );
  }
}

export default FindBand;
