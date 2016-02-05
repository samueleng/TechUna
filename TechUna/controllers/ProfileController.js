'use strict' 
 
angular
	   .module('App')
	   	.controller('ProfileController', ['$scope',  function($scope, $state, md5, profile){ 
	   	
	   		$scope.profile = profile; 

	   		/* 
	   		 Here we're getting the current user's email from the auth data that was resolved from our router, 
	   		 hashing it and setting to emailHash on profile. displayName will be set from the template we'll be  
	   		 creating next using ng-model. 
	   		*/
	   	 	$scope.updateProfile = function(){ 

			  $scope.profile.emailHash = md5.createHash(currentUser.password.email); 

			  $scope.profile.$save(); 
			  
			};
	   	}])