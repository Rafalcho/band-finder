export const artistSearch = (artist) => {

  const url = `https://api.spotify.com/v1/search?q=${artist}&type=artist`;
  const searchFetch = fetch(url);

  return searchFetch.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching artist failed');
    }
  })
  .then(response => {

    return response.artists.items[0];

  })
  .catch(error => {
    console.log('Fetching data error:', error);
  });

};

export const getAlbums = (artistId) => {

  const url = `https://api.spotify.com/v1/artists/${artistId}/albums?album_type=album&market=PL`;
  const albumsFetch = fetch(url);

  return albumsFetch.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching album failed');
    }
  })
  .then(response => {

    return response.items;

  })
  .catch(error => {
    console.log('Fetching data error:', error);
  });

};
