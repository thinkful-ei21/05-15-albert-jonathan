'use strict';
/* eslint-env jquery */
// eslint-disable-next-line no-unused-vars

const api = (function(){
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const API_KEY = 'AIzaSyAK3kfLuqg1vTbficJyZkmmTqx574YhXEI';

  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part: 'snippet',
      key: API_KEY,
      q: searchTerm
    };
  
    $.getJSON(BASE_URL, query, callback);
  };

  return {
    fetchVideos
  };

}());