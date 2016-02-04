'use strict'  
 
angular
	.module('App')
	.factory(
		'AuthService',
		[
			'$firebaseAuth',
			'SessionService', 
			'FIREBASE',
			/* 
				API for $firebaseAuth :https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-users-and-authentication
			*/
			function($firebaseAuth, SessionService, FIREBASE) { 
				
				var authService = {};

				var firebase = new Firebase(FIREBASE);
				/* 
					Check whether user is login
				*/
				authService.isAuthenticated = function() { 

					return !!SessionService.userId; 

				};

				authService.login = function(credentials) { 

					var firebaseAuthService = $firebaseAuth(firebase);

					var promise = firebaseAuthService.$authWithPassword( 

						{
							email: credentials.email, 

							password: credentials.password
						} 

					);

					promise.then(function(user) { 

						SessionService.create(user.token, user.uid); 

					});

					return promise;
				};

				authService.logout = function() { 

					var authService = $firebaseAuth(firebase);

					SessionService.destroy();

					authService.$unauth();
				};

				//Our factory will return the $firebaseAuth service associated with our Firebase.
				return authService;
			}
		]
	);