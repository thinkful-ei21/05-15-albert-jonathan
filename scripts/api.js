'use strict';
/* eslint-env jquery */
// eslint-disable-next-line no-unused-vars

const api = (function(){
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const API_KEY = 'AIzaSyAK3kfLuqg1vTbficJyZkmmTqx574YhXEI';

  const decorateResponse = function(response) {
    return response.items.map((item) => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url
      };
    });
  };

  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part: 'snippet',
      key: API_KEY,
      q: searchTerm
    };
  
    $.getJSON(BASE_URL, query, function(response) {
      callback(decorateResponse(response));
    });
  };

  return {
    fetchVideos,
  };

}());