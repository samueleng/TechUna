'use strict' 
 
angular 
  .module('App') 
    .controller('indexCtrl', ['$scope', '$window','$firebaseAuth',function($scope, $window, $firebaseAuth) { 
         $scope.logOut = function() { 
          var ref = new Firebase("https://samengfire.firebaseio.com/"); 
          var authData = ref.getAuth();
          ref.unauth();     
          console.log(authData)

          if(authData) { 
            console.log("You have logged out") 
            alert("Logged out successfully!") 
          } 
          else{ 
            alert("You have not signed in")
          }
          $window.location.href = '/index.html'; 
        }
        }]); 
   

angular 
  .module("App")  
    .factory(
      'AuthService',
      [
      '$firebaseAuth',
      'SessionService',
      function($firebaseAuth, SessionService) {
        var authService = {};

        var firebase = new Firebase("https://samengfire.firebaseio.com/");

        authService.isAuthenticated = function() {
          return !!SessionService.userId;
        };

        authService.login = function(credentials) {
          var firebaseAuthService = $firebaseAuth(firebase);

          var promise = firebaseAuthService.$authWithPassword(
          {
            email: credentials.email,
            password: credentials.password
          }
          );

          promise.then(function(user) {
            SessionService.create(user.token, user.uid);
          });

          return promise;
        };

        authService.logout = function() {
          var authService = $firebaseAuth(firebase);

          SessionService.destroy();

          authService.$unauth();
        };

        return authService;
      }
      ]
      ); 

angular 
    .module("App")   
      .controller(
        'LoginController',
        [
        '$scope',
        function($scope) {
          $scope.login = function(credentials) {
            $scope.loginAction(credentials);
          }
        }
        ]
    );

/*For signing out*/
angular 
    .module("App")  
    .service("out", function() {  
      var logOut = function() {
       var ref = new Firebase("https://samengfire.firebaseio.com/"); 
       var authData = ref.getAuth();
       ref.unauth();     
       console.log(authData)

       if(authData) { 
        console.log("You have logged out") 
        alert("Logged out successfully!") 
      } 
      else{ 
        alert("You have not signed in")
      }
      $window.location.href = '/index.html';  
    }  
});  


angular
.module('App')
    .factory(
      'AuthService',
      [
      '$firebaseAuth',
      'SessionService',
      function($firebaseAuth, SessionService) {
        var authService = {};

        var firebase = new Firebase("https://samengfire.firebaseio.com/");

        authService.isAuthenticated = function() {
          return !!SessionService.userId;
        };

        authService.login = function(credentials) {
          var firebaseAuthService = $firebaseAuth(firebase);

          var promise = firebaseAuthService.$authWithPassword(
          {
            email: credentials.email,
            password: credentials.password
          }
          );

          promise.then(function(user) {
            SessionService.create(user.token, user.uid);
          });

          return promise;
        };

        authService.logout = function() {
          var authService = $firebaseAuth(firebase);

          SessionService.destroy();

          authService.$unauth();
        };

        return authService;
      }
      ]
      );

