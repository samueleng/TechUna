'use strict' 
 
 angular 
    .module('App')  
       .controller('SignUpController', ['$scope','$window','$firebaseAuth', 'FIREBASE', function($scope, $window, $firebaseAuth, FIREBASE) { 


          /* 
           pass the user object which contains
                username 
                email 
                password
             
            delegrate to ApplicationController 
            Reason: tied to service loosely coupled
          */
          $scope.signUp = function(user) {  
                 
                $scope.registerAction(user);

          }; 
 
}]);  
   