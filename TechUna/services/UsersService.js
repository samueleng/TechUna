angular.module('App')
  .factory('Users', [
			'FIREBASE', 
			function($firebaseArray, $firebaseObject, FIREBASE){
				
    var usersRef = new Firebase(FIREBASE+'users');

    var users = $firebaseArray(usersRef);

    var Users = {
      getProfile: function(uid){
        return $firebaseObject(usersRef.child(uid));
      },

      getDisplayName: function(uid){
        return users.$getRecord(uid).displayName;
      },

      getGravatar: function(uid){
        return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
      },

      all: users
    };

    return Users;
  } 
]);