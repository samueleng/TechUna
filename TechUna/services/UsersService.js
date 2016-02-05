'use strict' 
  
/* 
  This is for users to check their profile information
  ToDo : 
*/
angular.module('App')
  .factory('Users', [
	 'FIREBASE',  

		function($firebaseArray, $firebaseObject, FIREBASE){
				
    var usersRef = new Firebase(FIREBASE + 'users');

    var users = $firebaseArray(usersRef);

    var Users = { 

      /* 
        get a $firebaseObject of a specific user's profile
      */
      getProfile: function getProfile(uid){ 

        return $firebaseObject(usersRef.child(uid)); 

      },

      /* 
        returns a user's display name  
        parameters : user id
      */
      getDisplayName: function getDisplayName(uid){ 

        return users.$getRecord(uid).displayName; 

      },

      /* 
        
      */
      getGravatar: function getGravatar(uid){ 

        return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash; 

      },

      /* 
        get all users in $firebaseArray
      */
      all: users 

    };

    return Users; 
    
  } 
]);