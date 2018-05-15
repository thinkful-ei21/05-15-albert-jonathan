'use strict';
/* eslint-env jquery */
/* global VideoList, store, api*/

const mockData = {
  'kind': 'youtube#searchListResponse',
  'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/wog1bvyLU_M7qFCfd7T1_WVSYh4"',
  'nextPageToken': 'CAUQAA',
  'regionCode': 'US',
  'pageInfo': {
    'totalResults': 1000000,
    'resultsPerPage': 5
  },
  'items': [
    {
      'kind': 'youtube#searchResult',
      'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/_eMd3IjQmhVJRrmZ110pWsqUWTY"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'q86Lx4uWI54'
      },
      'snippet': {
        'publishedAt': '2018-03-07T16:00:04.000Z',
        'channelId': 'UCyu8StPfZWapR6rfW_JgqcA',
        'title': 'Justice League Action | Batman VS Batman! | DC Kids',
        'description': 'Batman has been split into two: one passive and good, the other aggressive and mean! But the real question is, how will Green Arrow look in red? DCKids is ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/q86Lx4uWI54/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/q86Lx4uWI54/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/q86Lx4uWI54/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'DC Kids',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/oWLguqyR4FDPWlmcr8_BQb49flU"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'AjtBlcB7C5k'
      },
      'snippet': {
        'publishedAt': '2018-04-20T16:43:33.000Z',
        'channelId': 'UCdk5Rgx0GXlpSqKrWuf-TKA',
        'title': 'Lego Batman Birthday Party',
        'description': 'Lego Batman Birthday Party is a Funny Lego Stop Motion Animation. Superman, Flash, Barbara, Alfred, Robin, Wonder Woman, Cyborg and Aquaman are ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/AjtBlcB7C5k/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/AjtBlcB7C5k/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/AjtBlcB7C5k/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'FK Films',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/kMmWmHk2LXRirj1mQkJ76CnNw0g"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'gjNukU-3jPk'
      },
      'snippet': {
        'publishedAt': '2018-01-13T23:01:58.000Z',
        'channelId': 'UCGBtk3J7PL40ZMhf3_1YBwg',
        'title': 'Evolution of Batman in Cartoons in 45 Minutes (2018)',
        'description': 'A look at how animated Batman has changed since 1968. Thanks for watching! Make sure to write your suggestions in the comments below. List of cartoons and ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/gjNukU-3jPk/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/gjNukU-3jPk/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/gjNukU-3jPk/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Then & Now',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/tgh8yKdI7vyhzRHWxD57-kEjUSU"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'JUWgGzqxgQo'
      },
      'snippet': {
        'publishedAt': '2017-09-23T15:00:01.000Z',
        'channelId': 'UCyu8StPfZWapR6rfW_JgqcA',
        'title': 'An Animated History of Batman | Batman Day | DC Kids',
        'description': 'From Batman: The Animated Series to Justice League Action, check out the very best of Batman\'s animated history. DCKids is home to all your favorite DC ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/JUWgGzqxgQo/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/JUWgGzqxgQo/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/JUWgGzqxgQo/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'DC Kids',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/P6SV1Qt8jx2YrsiW6uCGtgdr1EE"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'k5BydF3b6DQ'
      },
      'snippet': {
        'publishedAt': '2018-05-14T12:33:53.000Z',
        'channelId': 'UC0jiHlUjj93K265M1IlVxAw',
        'title': 'Dance Alien With Hulk vs Batman Play Pokemon Go Cartoon | Dame Tu Cosita & Gangnam Style Hiphop',
        'description': 'Dance Alien With Hulk vs Batman Play Pokemon Go Cartoon | Dame Tu Cosita & Gangnam Style Hiphop ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/k5BydF3b6DQ/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/k5BydF3b6DQ/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/k5BydF3b6DQ/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'HST Studio',
        'liveBroadcastContent': 'none'
      }
    }
  ]
};

// moved to api.js
// const API_KEY = 'AIzaSyAK3kfLuqg1vTbficJyZkmmTqx574YhXEI';

/*
  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }

*/

// now moved to store.js
// const store = {
//   videos: []
// };

// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
// moved to api.js
// const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
// moved to api.js
// const fetchVideos = function(searchTerm, callback) {
//   const query = {
//     part: 'snippet',
//     key: API_KEY,
//     q: searchTerm
//   };
//   $.getJSON(BASE_URL, query, callback);
// };

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
// moved to VideoList.js
// const decorateResponse = function(response) {
//   return response.items.map((item) => {
//     return {
//       id: item.id.videoId,
//       title: item.snippet.title,
//       thumbnail: item.snippet.thumbnails.default.url
//     };
//   });
// };

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
// moved to VideoList.js
// const generateVideoItemHtml = function(video) {
//   return `
//     <li id="${video.id}">
//       <h3>${video.title}</h3>
//       <img src="${video.thumbnail}">
//     </li>
//   `;
// };

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
// moved to store.js
// const addVideosToStore = function(videos) {
//   store.videos.push(...videos);
// };

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
// moved to VideoList.js
// const render = function() {
//   const resultsStrings = store.videos.map(each => generateVideoItemHtml(each));
//   $('.results').html(resultsStrings);
// };

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
// moved to VideoList.js
// const handleFormSubmit = function() {
//   $('.js-search-form').submit(function(event) {
//     event.preventDefault();
//     const queryTarget = $(event.currentTarget).find('#search-term');
//     const query = queryTarget.val();
//     // this clears input
//     queryTarget.val('');
//     fetchVideos(query, function(response){
//       addVideosToStore(decorateResponse(response));
//       render();
//     });
//   });
// };

// When DOM is ready:
// eslint-disable-next-line no-unused-vars
$(function() {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
  VideoList.handleFormSubmit();
});