var app = angular.module("signInApp", ['ngRoute','firebase'])  

           
app.controller('signInCtrl', ['$scope', '$firebaseAuth',function($scope,$firebaseAuth) {
  var firebaseObj = new Firebase("https://samengfire.firebaseio.com/");
  var loginObj = $firebaseAuth(firebaseObj);
  
  
  $scope.SignIn = function(e){ 
     e.preventDefault();
     var username = $scope.user.email;
     var password = $scope.user.password;
        loginObj.$authWithPassword({
            email: username,
            password: password
        })
        .then(function(user) {
            //Success callback
            console.log('Authentication successful');
        }, function(error) {
            //Failure callback
            console.log('Authentication failure');
        });
  }
}]);