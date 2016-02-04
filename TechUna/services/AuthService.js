'use strict'  
 
angular
	.module('App')
	.factory(
		'AuthService',
		[
			'$firebaseAuth',
			'SessionService', 
			'FIREBASE',
			function($firebaseAuth, SessionService) { 
				
				var authService = {};


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

					var authService = $firebaseAuth(FIREBASE);

					SessionService.destroy();

					authService.$unauth();
				};

				return authService;
			}
		]
	);