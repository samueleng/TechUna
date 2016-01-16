var app = angular.module("signInApp", ['ngRoute','firebase'])  

           
app.controller('signInCtrl', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
  var firebaseObj = new Firebase("https://samengfire.firebaseio.com/");
  var loginObj = $firebaseSimpleLogin(firebaseObj);
  
  $scope.user = {};
  $scope.SignIn = function(e){ 
     e.preventDefault();
     var username = $scope.user.email;
     var password = $scope.user.password;
     loginObj.$login('password', {
                email: username,
                password: password
            })
            .then(function(user) {
                //Success callback
                console.log('Authentication successful'); 
                alert("Authentication successful");
            }, function(error) {
                //Failure callback
                console.log('Authentication failure'); 
                alert("Authentication failure");
            });
  }
}]);