'use strict' 
 
angular
	.module(
		'App'
	)
	.controller(
		'LogoutController',
		[
			'$scope',
			'$rootScope',
			'$location',
			'AUTH_EVENTS',
			'AuthService',
			function($scope, $rootScope, $location, AUTH_EVENTS, AuthService) {
				$scope.logout = function() {
					AuthService.logout();

					$rootScope.$broadcast(AUTH_EVENTS.logout);
					$scope.setCurrentUser(null);

					$location.path('/home');
				}
			}
		]
	);