angular
	.module('App')
	.factory(
		'AuthService',
		[
			'$firebaseAuth',
			'SessionService',
			function($firebaseAuth, SessionService) {
				var authService = {};

				var firebase = new Firebase("https://samengfire.firebaseio.com/");

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

				return authService;
			}
		]
	);