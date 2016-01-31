'use strict' 
 
var app = angular.module("signInApp", ['ngRoute','firebase','homeApp'])  

     
app.controller('signInCtrl', ['$scope', '$window','$firebaseAuth', 'out',function($scope, $window, $firebaseAuth, out) {
  var firebaseObj = new Firebase("https://samengfire.firebaseio.com/");
  var loginObj = $firebaseAuth(firebaseObj);
  var authData = firebaseObj.getAuth();
  $scope.logout = out.logOut()
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
            firebaseObj.onAuth(authDataCallback); 

            console.log('Authentication successful');  
            $window.location.href = '/index.html'; 
        }, function(error) {
            //Failure callback
            console.log('Authentication failure');
        });
  }
}]); 
 
// Create a callback which logs the current auth state
function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
} 
  
