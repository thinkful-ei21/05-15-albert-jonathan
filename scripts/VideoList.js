'use strict';
/* eslint-env jquery */
// eslint-disable-next-line no-unused-vars
/* global store, api*/

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

  const handleFormSubmit = function() {
    $('.js-search-form').submit(function(event) {
      event.preventDefault();
      const queryTarget = $(event.currentTarget).find('#search-term');
      const query = queryTarget.val();
      // this clears input
      queryTarget.val('');
      api.fetchVideos(query, function(response){
        store.addVideosToStore(response);
        render();
      });
    });
  };

  return {
    render,
    handleFormSubmit
  };
}());