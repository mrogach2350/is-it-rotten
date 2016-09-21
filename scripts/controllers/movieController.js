angular
  .module('IsItRotten')
  .controller('movieController', movieController);

  function movieController(){
    var vm = this;
    vm.dummyMovie = {
      "Title": "Hunt for the Wilderpeople",
      "Year": "2016",
      "Rated": "PG-13",
      "Released": "31 Mar 2016",
      "Runtime": "101 min",
      "Genre": "Adventure, Comedy, Drama",
      "Director": "Taika Waititi",
      "Writer": "Taika Waititi (screenplay), Barry Crump (based on the book by)",
      "Actors": "Sam Neill, Julian Dennison, Rima Te Wiata, Rachel House",
      "Plot": "A national manhunt is ordered for a rebellious kid and his foster uncle who go missing in the wild New Zealand bush.",
      "Language": "English",
      "Country": "New Zealand",
      "Awards": "8 wins & 3 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_SX300.jpg",
      "Metascore": "80",
      "imdbRating": "8.4",
      "imdbVotes": "5,088",
      "imdbID": "tt4698684",
      "Type": "movie",
      "tomatoMeter": "99",
      "tomatoImage": "certified",
      "tomatoRating": "8.0",
      "tomatoReviews": "127",
      "tomatoFresh": "126",
      "tomatoRotten": "1",
      "tomatoConsensus": "The charmingly offbeat Hunt for the Wilderpeople unites a solid cast, a talented filmmaker, and a poignant, funny, deeply affecting message.",
      "tomatoUserMeter": "92",
      "tomatoUserRating": "4.4",
      "tomatoUserReviews": "13533",
      "tomatoURL": "http://www.rottentomatoes.com/m/hunt_for_the_wilderpeople/",
      "DVD": "27 Sep 2016",
      "BoxOffice": "$142,528.00",
      "Production": "Piki Films",
      "Website": "http://wilderpeople.film/",
      "Response": "True"
    }
  }
