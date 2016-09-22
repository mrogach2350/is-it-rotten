angular
  .module('IsItRotten')
  .controller('movieController', movieController)

  movieController.$inject = ['$scope', 'MovieService'];
  function movieController($scope, MovieService) {
    $scope.movie = {"Title": "Captain America: Civil War",
                    "Year": "2016",
                    "Rated": "PG-13",
                    "Released": "06 May 2016",
                    "Runtime": "147 min",
                    "Genre": "Action, Adventure, Sci-Fi",
                    "Director": "Anthony Russo, Joe Russo",
                    "Writer": "Christopher Markus (screenplay), Stephen McFeely (screenplay), Joe Simon (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",
                    "Actors": "Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan",
                    "Plot": "Political interference in the Avengers' activities causes a rift between former allies Captain America and Iron Man.",
                    "Language": "English, German, Xhosa, Russian, Romanian",
                    "Country": "USA, Germany",
                    "Awards": "2 wins & 7 nominations.",
                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
                    "Metascore": "75",
                    "imdbRating": "8.2",
                    "imdbVotes": "285,911",
                    "imdbID": "tt3498820",
                    "Type": "movie",
                    "tomatoMeter": "90",
                    "tomatoImage": "certified",
                    "tomatoRating": "7.6",
                    "tomatoReviews": "321",
                    "tomatoFresh": "289",
                    "tomatoRotten": "32",
                    "tomatoConsensus": "Captain America: Civil War begins the next wave of Marvel movies with an action-packed superhero blockbuster boasting a decidedly non-cartoonish plot and the courage to explore thought-provoking themes.",
                    "tomatoUserMeter": "90",
                    "tomatoUserRating": "4.3",
                    "tomatoUserReviews": "165614",
                    "tomatoURL": "http://www.rottentomatoes.com/m/captain_america_civil_war/",
                    "DVD": "13 Sep 2016",
                    "BoxOffice": "$127,462.00",
                    "Production": "Walt Disney Pictures",
                    "Website": "http://marvel.com/captainamerica#/home",
                    "Response": "True"
                  }
    tomato($scope.movie.tomatoImage);

    $scope.getMovie = getMovie;

    function getMovie(title){
      console.log('Current movie:', $scope.movie);
      console.log('controller getting movie ', title);
      MovieService.get(title).then(onMovieGetSuccess, onError);
    }


    function onMovieGetSuccess(movie){
      console.log('controller got back movie: ', movie);
      $scope.movie = movie;
      tomato($scope.movie.tomatoImage);
    }
    function onError(){
      console.log('contoller: error retrieving book');
    }

   function tomato(str){
     if (str === 'fresh'){
       $scope.image = "http://i.imgur.com/tTca7fW.png";
     }
     else if (str === 'rotten'){
       $scope.image = "http://i.imgur.com/7qhJwKm.png";
     }
      else if (str === 'certified'){
       $scope.image = "http://i.imgur.com/zWnlkTY.png";
     }
     else if (str === 'N/A'){
       $scope.image = '../images/tomatolost.png';
       $scope.movie = {};
       $scope.movie.Title = 'Our little tomato got lost!';
       $scope.movie.tomatoConsensus = 'Please try again. Remember to check spelling!';
     }
   }

  };
