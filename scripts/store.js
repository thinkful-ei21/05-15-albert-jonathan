'use strict';
/* eslint-env jquery */
// eslint-disable-next-line no-unused-vars

const store = (function(){
  const videos = [];

  // below is spec'd per thinkful's instruction
  // const setVideos = function(videos){
  //   this.videos = videos;
  // };

  const addVideosToStore = function(videos) {
    store.videos = videos;
    // store.videos.push(...videos);
    // the above can also be written as below as to not mutate the original data immediately
    // store.videos = store.videos.concat(videos);
  };

  return {
    videos,
    // setVideos,
    addVideosToStore
  };
}());
