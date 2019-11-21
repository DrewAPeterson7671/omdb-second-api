
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MovieService } from './../src/movies.js';
import { GifService } from './../src/movies.js';
// import { GiphyService } from './../src/movies.js';


$(document).ready(function() {

  $('#movieButton').click(function() {
    $("#gifToDisplay").show();
    const movie = $('#location').val();
    $('#location').val("");

    (async () => {
      let movieService = new MovieService();
      const response = await movieService.getMovie(movie);
      getElements(response);
    })();

    function getElements(response) {
      $('.showMovie').text(`${response.Title}`);
      $('.showDirector').text(`${response.Director}`);
    }


    // setInterval (function() {
    //   $("#gifToDisplay").toggle();
    // },8000);


    (async () => {
      let gifService = new GifService();
      const gifResponse = await gifService.getGif(movie);
      getGifElements(gifResponse);
    })();

    function getGifElements(response) {
    $("#gif").attr("src", response.data.images.original.url);
    }




    // $("#gif").attr("src", movieApiCall(movie));


    console.log();

  });
});












// https://api.giphy.com/v1/gifs/translate?api_key=${process.env.API_KEY}&s=${searchTermWinLoss}`
//
// const getElements = function(response) {
//   $("#imageWinLoss").attr("src", response.data.images.original.url);
// };
//
// let searchTerm = "city";
//
// let api = function() {
//   let request = new XMLHttpRequest();
//   const url = `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.API_KEY}&s=${searchTerm}`;
//
//   request.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElements(response);
//     }
//   };
//
//   request.open("GET", url, true);
//   request.send();
//
//   const getElements = function(response) {
//     $("#testGif").attr("src", response.data.images.original.url);
//   };
// };
