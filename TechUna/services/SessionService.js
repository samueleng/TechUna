'use strict' 
 
angular
	.module('App')
	.service(
		'SessionService',  

		function() {  

			/* 
				This function create a authToken that will persist for the current user
			*/ 

			this.create = function(authToken, userId) {  

				console.log("Login successful")  

				alert("Login successful") 

				this.authToken = authToken; 

				this.userId = userId; 

			}

			/* 
				This function removes the authToken upon logout
			*/ 
			this.destroy = function() {  

				console.log("Logout") 

				alert("Logout successful") 

				this.authToken = null; 
				
				this.userId = null;
			}
		}
	);