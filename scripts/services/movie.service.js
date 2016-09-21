angular
  .module('IsItRotten')
  .service('MovieService', MovieService);

  MovieService.$inject = ['$http', '$q'];
  function MovieService($http, $q) {
    console.log('service');
    var self = this;
    self.movie = {};
    self.get = get;


  function get(title) {
    console.log('someone searched for movie', title)
     var searchTitle = '&t=' + title.toLowerCase().split(' ').join('+');
     var def = $q.defer();

    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?tomatoes=true&apikey=b596e7f8'+ searchTitle
    }).then(onMovieShowSuccess, onError);

    return def.promise;

    function onMovieShowSuccess(response) {
      console.log('MovieService: here\'s the data for movie', title, ':', response.data);
      self.movie = response.data;
      def.resolve(self.movie);
    }
    function onError(error){
      console.log('there was an error: ', error);
      self.book = {error: error};
      def.reject(self.movie);
    }
  }
}
