var app = angular.module("homeApp", ['ngRoute','firebase'])   

app.controller('signOutCtrl', ['$scope', '$window','$firebaseAuth',function($scope, $window, $firebaseAuth) { 
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
  
 
app.service("out", function() {  
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
 


