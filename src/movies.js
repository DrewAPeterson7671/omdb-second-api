
export class MovieService {
  async getMovie(movie) {
    try {
      let response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${process.env.OMDB_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}


export class GifService {
  async getGif(movie) {
    try {
      let gifResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${process.env.GIPHY_KEY}&s=${movie}`);
      let jsonifiedResponse = await gifResponse.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}








//
//
// export function movieApiCall(movie) {
//   return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${process.env.GIPHY_KEY}&s=${movie}`)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(jsonResponse) {
//     return jsonResponse.data.images.original.url;
//
//   });
//
// }






















// export class GiphyService {
//   getAPI(movie) {fetch(`http://api.giphy.com/v1/gifs/translate?q=${movie}&api_key=${process.env.API_KEY_GIPHY}&limit=1"`);
//   console.log(movie);
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(jsonifiedResponse) {
//     return getElements(jsonifiedResponse);
//   });
// }
//
//
// export class GiphyService {
//   getAPI(movie) {fetch(`http://api.giphy.com/v1/gifs/translate?q=${movie}&api_key=${process.env.API_KEY_GIPHY}&limit=1"`);
//   console.log(movie);
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(jsonifiedResponse) {
//     return getElements(jsonifiedResponse);
//   });
// }
