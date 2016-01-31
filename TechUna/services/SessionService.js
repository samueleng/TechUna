'use strict' 
 
angular
	.module('App')
	.service(
		'SessionService',
		function() {
			this.create = function(authToken, userId) { 
				console.log("Login successful") 
				alert("Login successful")
				this.authToken = authToken;
				this.userId = userId;
			}

			this.destroy = function() { 
				console.log("Logout")
				alert("Logout successful")
				this.authToken = null;
				this.userId = null;
			}
		}
	);