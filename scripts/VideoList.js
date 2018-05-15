'use strict';
/* eslint-env jquery */
// eslint-disable-next-line no-unused-vars
/* gobal store, api*/

const VideoList = (function(){
  const generateVideoItemHtml = function(video) {
    return `
      <li id="${video.id}">
        <h3>${video.title}</h3>
        <img src="${video.thumbnail}">
      </li>
    `;
  };

  const render = function() {
    const resultsStrings = store.videos.map(each => generateVideoItemHtml(each));
    $('.results').html(resultsStrings);
  };

  const decorateResponse = function(response) {
    return response.items.map((item) => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url
      };
    });
  };

  const handleFormSubmit = function() {
    $('.js-search-form').submit(function(event) {
      event.preventDefault();
      const queryTarget = $(event.currentTarget).find('#search-term');
      const query = queryTarget.val();
      // this clears input
      queryTarget.val('');
      api.fetchVideos(query, function(response){
        store.addVideosToStore(decorateResponse(response));
        render();
      });
    });
  };

  return {
    render,
    handleFormSubmit
  };
}());