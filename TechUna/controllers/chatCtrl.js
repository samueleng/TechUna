'use strict' 

angular 
	  .module('App')
		.controller('chatCtrl', function($scope, $firebaseArray, $firebaseObject, $timeout) {
		  var rootRef = new Firebase("https://samengfire.firebaseio.com/");
		  var messagesRef = rootRef.child("messages");  
		  var titleRef = rootRef.child("title");

		  $scope.title = null;
		  $scope.currentUser = null; 
		  $scope.currentText = null;  
		  $scope.messages = [];

		  //call title only once
		  titleRef.once('value', function(snapshot){ 
		  	$scope.title = snapshot.val(); 
		  	titleRef.off();
		  })

		  //listen for new messages
		  messagesRef.on("child_added", function(snapshot){ //child_added = performance get item we want to update only
		  	$timeout(function(){ 
		  		var snapshotVal = snapshot.val(); 
		  		
		  		$scope.messages.push(
		  			{ 
		  				text: snapshotVal.text, 
		  				user: snapshotVal.user, 
		  				key: snapshot.key()
		  			}
		  		);
		  	 })
		  })  

		  //listen for changed messages - we can change messages here
		  messagesRef.on("child_changed", function(snapshot){ 
		  	$timeout(function(){ 
		  		var snapshotVal = snapshot.val();  
		  		var message = findMessagesByName(snapshot.key()) 
		  		message.text = snapshotVal.text;
		  	
		  	 })
		  }) 

		  //listen for deleted items
		  messagesRef.on("child_removed", function(snapshot){ 
		  	$timeout(function(){ 
		  		deleteMessagesByName(snapshot.key	());
		  	 })
		  })
		    
		  //turning all listeners off 
		  $scope.turnFeedOff = function(){ 
		  	messagesRef.off();
		  };  

		  //turning all listeners on again
		  $scope.turnFeedOn = function(){ 
		  	messagesRef.off(this)
		  };

		  $scope.sendMessage = function(){  
		  	var newMessage = { 
		  		user: $scope.currentUser, 
		  		text: $scope.currentText
		  	} 

		  	messagesRef.push(newMessage)
		  } 

		  //function to find messages
		  function findMessagesByName(name){ 
		  	var messageFound = null; 
		  	for (var i = 0; i < $scope.messages.length; i++){ 
		  		var currentMessage = $scope.messages[i]; 
		  		if (currentMessage.key === name){ 
		  			messageFound = currentMessage; 
		  			break;
		  		} 
		  	} 
		  	return messageFound;
		  }    

		  //function to delete messages
		  function deleteMessagesByName(name){ 
		  	for (var i = 0; i < $scope.messages.length; i++){ 
		  		var currentMessage = $scope.messages[i]; 
		  		if (currentMessage.key === name){ 
		  			$scope.messages.splice(i, 1); //delete item off array
		  			break;
		  		} 
		  	} 
		  }  
	})
