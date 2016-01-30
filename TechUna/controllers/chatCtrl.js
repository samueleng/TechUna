angular 
	  .module('App')
		.controller('chatCtrl', function($scope, $firebaseArray, $firebaseObject) {
		  var ref = new Firebase("https://samengfire.firebaseio.com/messages");
		  
		  $scope.messages = $firebaseArray(ref);
		  
		  $scope.addMessage = function(e) { 

		          if (e.keyCode != 13) return; 

		          $scope.messages.$add({from: $scope.name, body: $scope.msg}); 

		          $scope.msg = "";
		  } 
	})
