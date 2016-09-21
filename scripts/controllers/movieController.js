angular
  .module('IsItRotten')
  .controller('movieController', movieController)

  movieController.$inject = ['$scope', 'MovieService'];
  function movieController($scope, MovieService) {
    $scope.dummyMovie = {
      title: "Hunt for the Wilderpeople",
      poster: "http://i.imgur.com/1eKtqL4.jpg"
    }
    $scope.movie = {};
    $scope.getMovie = getMovie;

    function getMovie(title){
      console.log('controller getting movie ', title);
      MovieService.get(title).then(onMovieGetSuccess, onError);
    }
    function onMovieGetSuccess(movie){
      console.log('controller got back movie: ', movie);
      $scope.movie = movie;
    }
    function onError(){
      console.log('contoller: error retrieving book');
    }

  };
