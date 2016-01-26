var mainApp = angular.module("mainApp", ['ngRoute','firebase'])    


mainApp.controller('indexCtrl', ['$scope', '$window','$firebaseAuth',function($scope, $window, $firebaseAuth) { 
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
  
    
 

/*For signing out*/
mainApp.service("out", function() {  
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
 
   


