'use strict' 
angular
	.module('App')
	.controller(
		'ApplicationController', 

		[
			'$scope', 
			'$rootScope',
			'$location', 
			'$firebaseObject', 
			'AUTH_EVENTS',
			'AuthService', 
			'FIREBASE',  


			function($scope, $rootScope, $location, $firebaseObject, AUTH_EVENTS, AuthService, FIREBASE) { 

				$scope.currentUser = null; 

				$scope.isAuthenticated = AuthService.isAuthenticated;

				/* 
					set currentUser
				*/
				$scope.setCurrentUser = function(user) { 

					$scope.currentUser = user;  


				}; 

				$scope.registerAction = function(user) { 

					 AuthService.register(user);

				}

				/*  
					LoginController will call this function 
					loginAction will use AuthService to login
				*/
				$scope.loginAction = function(credentials) {  

					AuthService.login(credentials).then( 

						/*  
							if success we notify all listeners that listen for loginSuccess event  
						*/
						function(user) { 
							 
							//grab from /users/{{user.uid}}
							var userRef = new Firebase(FIREBASE + 'users/' + user.uid );
						    
						    var userObj = $firebaseObject(userRef);
						    console.log(userObj)
							$rootScope.$broadcast(AUTH_EVENTS.loginSuccess); 

							$scope.setCurrentUser(userObj);

							$location.path('/home');
						}, 

						/* 
							if fail we notify all listeners that listen for loginFail event 
						*/
						function() { 

							$rootScope.$broadcast(AUTH_EVENTS.loginFail); 

						}
					);
				}
			}
		]
	);