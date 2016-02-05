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

				/* 
				   pass the credentials object which contains
				   credentials.email 
				   credentails.password 

				   delegrate to ApplicationController 
				   Reason: setting rootScope and broadcast event is done together
				*/
				$scope.login = function(credentials) { 

					$scope.loginAction(credentials); 

				}
			}
		]
	);