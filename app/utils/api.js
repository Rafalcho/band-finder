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

export const getArtist = (artistId) => {
  const url = `https://api.spotify.com/v1/artists/${artistId}`;
  const artistFetch = fetch(url);

  return artistFetch.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching artist failed');
    }
  })
  .then(response => {
    return response;

  })
  .catch(error => {
    console.log('Fetching data error:', error);
  });
};

export const getAlbum = (albumId) => {

  const url = `https://api.spotify.com/v1/albums/${albumId}`;
  const albumFetch = fetch(url);

  return albumFetch.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching album failed');
    }
  })
  .then(response => {
    console.log(response);
    return response;

  })
  .catch(error => {
    console.log('Fetching data error:', error);
  });

};

export const getAlbumTracks = (albumId) => {

  const url = `https://api.spotify.com/v1/albums/${albumId}/tracks`;
  const albumTracksFetch = fetch(url);

  return albumTracksFetch.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching album tracks failed');
    }
  })
  .then(response => {
    console.log(response);
    return response;

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
      throw new Error('Fetching albums failed');
    }
  })
  .then(response => {

    return response.items;

  })
  .catch(error => {
    console.log('Fetching data error:', error);
  });

};

export const getSimilarArtists = (artistId) => {
  const url = `https://api.spotify.com/v1/artists/${artistId}/related-artists`;
  const similarFetch = fetch(url);

  return similarFetch.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching similar artists failed');
    }
  })
  .then(response => {

      return response.artists;

    })
  .catch(error => {
      console.log('Fetching data error:', error);
    });
};

export const getTopTracs = (artistId) => {
  const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`;
  const topTracksFetch = fetch(url);

  return topTracksFetch.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching top tracks failed');
    }
  })
  .then(response => {

      return response.tracks;

    })
  .catch(error => {
      console.log('Fetching data error:', error);
    });
};

export const randomArtistSearch = () => {
  const year = Math.floor(Math.random() * (2016 - 1960 + 1) + 1960);
  const offset = Math.floor(Math.random() * (100 - 1 + 1) + 1);

  const url = `https://api.spotify.com/v1/search?q=year:${year}&type=artist&limit=1&offset=${offset}`;
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
