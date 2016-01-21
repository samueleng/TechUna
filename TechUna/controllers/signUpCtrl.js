var app = angular.module("signUpApp", ['ngRoute','firebase'])  

           
app.controller('signUpCtrl', ['$scope','$window','$firebaseAuth',function($scope, $window, $firebaseAuth) {
  var firebaseObj = new Firebase("https://samengfire.firebaseio.com/");
  var auth = $firebaseAuth(firebaseObj) 

  $scope.signUp = function() {  
    
        if (!$scope.regForm.$invalid) { 
            var email = $scope.user.email;
            var password = $scope.user.password; 
            var confirmPassword = $scope.user.confirmPassword;
            if (email && password) {
                auth.$createUser({email: email, password: password})
                    .then(function() {
                        // do things if success 
                        $window.location.href = '/signin.html'; 
                        console.log('User creation success');  
                        
                    }, function(error) {
                        // do things if failure
                        console.log(error);   
                        $scope.regError = true;
                        $scope.regErrorMessage = error.message;
                    });
            }
        }
    };
}]);  
   