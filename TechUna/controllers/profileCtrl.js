angular
	   .module('App')
	   	.controller('profileCtrl', function($state, md5, auth, profile){ 
	   		var profileCtrl = this;  
	   		
	   		profileCtrl.profile = profile; 

	   		/* 
	   		 Here we're getting the current user's email from the auth data that was resolved from our router, 
	   		 hashing it and setting to emailHash on profile. displayName will be set from the template we'll be  
	   		 creating next using ng-model. 
	   		*/
	   	 	profileCtrl.updateProfile = function(){
			  profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
			  profileCtrl.profile.$save();
			};
	   	})