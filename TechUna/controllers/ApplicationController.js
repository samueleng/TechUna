'use strict' 
angular
	.module('App')
	.controller(
		'ApplicationController', 

		[
			'$scope',
			'$rootScope',
			'$location',
			'AUTH_EVENTS',
			'AuthService', 

			function($scope, $rootScope, $location, AUTH_EVENTS, AuthService) { 

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

							$rootScope.$broadcast(AUTH_EVENTS.loginSuccess); 

							$scope.setCurrentUser(user);

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