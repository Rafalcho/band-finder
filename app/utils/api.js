export const artistSearch = (artist) => {
  // const artistString = [...artist].join('%20');
  const url = `https://api.spotify.com/v1/search?q=${artist}&type=artist`;
  const searchFetch = fetch(url);

  return searchFetch.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching failed');
    }
  })
  .then(response => {
    console.log(response.artists.items[0]);
    return response.artists.items[0];

  })
  .catch(error => {
    console.log('Fetching data error:', error);
  });

};
