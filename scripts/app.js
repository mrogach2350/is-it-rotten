console.log("Sanity Check");
angular.module('IsItRotten', ['djds4rce.angular-socialshare'])
  .config(config)
  .run(function($FB){
    $FB.init('1271911079507707')
  });

  config.$inject = ['$locationProvider'];
  function config ($locationProvider){
    $locationProvider
      .html5Mode({
          enabled: true,
          requireBase: false
      });
  };
