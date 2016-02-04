'use strict' 
angular
	.module('App')
	.controller(
		'applicationCtrl',
		[
			'$scope',
			'$rootScope',
			'$location',
			'AUTH_EVENTS',
			'AuthService',
			function($scope, $rootScope, $location, AUTH_EVENTS, AuthService) {
				$scope.currentUser = null;
				$scope.isAuthenticated = AuthService.isAuthenticated;

				$scope.setCurrentUser = function(user) {
					$scope.currentUser = user;
				};

				$scope.loginAction = function(credentials) {
					AuthService.login(credentials).then(
						function(user) {
							$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
							$scope.setCurrentUser(user);

							$location.path('/home');
						},
						function() {
							$rootScope.$broadcast(AUTH_EVENTS.loginFail);
						}
					);
				}
			}
		]
	);