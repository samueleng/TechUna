'use strict' 
 
angular
	.module(
		'App'
	)
	.controller(
		'LoginController',
		[
			'$scope',
			function($scope) { 
				$scope.login = function(credentials) {
					$scope.loginAction(credentials);
				}
			}
		]
	);