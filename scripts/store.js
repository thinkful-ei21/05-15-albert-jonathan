'use strict';
/* eslint-env jquery */
// eslint-disable-next-line no-unused-vars

const store = (function(){
  const videos = [];

  const setVideos = function(videos){
    videos = this.videos;
  };

  const addVideosToStore = function(videos) {
    store.videos.push(...videos);
  };

  return {
    videos,
    setVideos,
    addVideosToStore
  };
}());
