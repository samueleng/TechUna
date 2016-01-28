angular
	.module(
		'App'
	)
	.controller(
		'loginCtrl',
		[
			'$scope',
			function($scope) {
				$scope.login = function(credentials) {
					$scope.loginAction(credentials);
				}
			}
		]
	);