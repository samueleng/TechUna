
'use strict'  
 
angular
	.module('App')
	.factory(
		'AuthService',
		[
			'$firebaseAuth', 
			'$window',
			'SessionService', 
			'FIREBASE', 
			/* 
				API for $firebaseAuth :https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-users-and-authentication
			*/
			function($firebaseAuth, $window, SessionService, FIREBASE) { 
				
				var authService = {};

				var firebaseObj = new Firebase(FIREBASE);   

				var auth = $firebaseAuth(firebaseObj);
				
				/* 
					Check whether user is login
				*/
				authService.isAuthenticated = function() { 

					return !!SessionService.userId; 

				};   

				authService.requireAuth =  function() { 

			       return auth.$requireAuth(); 

			     }; //require Authentication

				/* 
					Allow user to register
				*/
				authService.register = function(user) { 

                    var email = user.email; 

                    var password = user.password;  

                    var confirmPassword = user.confirmPassword; 

                    if (email && password) { 

                        auth.$createUser({email: email, password: password}) 

                            .then(function(regUser) { 

                                //form information
                                var userRef = new Firebase(FIREBASE + 'users')

                                // save to /user 
                                .child(regUser.uid).set({ 
                                    date: Firebase.ServerValue.TIMESTAMP,
                                    regUser: regUser.uid,
                                    user: user.username,        
                                    email: user.email
                                }) 

                                // do things if success  
                                $window.location.href = '/index.html';  

                                console.log('User creation success');   

                                swal("User created", "", "success")
                                
                            }, function(error) { 

                                // do things if failure 
                                console.log(error);   
                                
                               	sweetAlert("Oops...", "Something went wrong!", "error");
                            });
        
                	} 

				};

				/* 
					 $firebaseAuth 
					 returns a promise which is resolved or rejected when the authentication attempt  
					 is completed
				*/
				authService.login = function(credentials) { 

					var firebaseAuthService = $firebaseAuth(firebaseObj);

					var promise = firebaseAuthService.$authWithPassword( 

						{
							email: credentials.email, 

							password: credentials.password
						} 

					);

					//successful: return object containing auth data about user
					promise.then(function(user) { 

						SessionService.create(user.token, user.uid); 

					})  

					//failure: return Error object
					.catch(function(error){ 

						console.log("Authentication failed!	");  

						alert("Authentication failed!");

					})

					return promise;
				};

				authService.logout = function() { 

					var authService = $firebaseAuth(firebaseObj);

					SessionService.destroy();

					authService.$unauth();
				};

				//Our factory will return the $firebaseAuth service associated with our Firebase.
				return authService;
			}
		]
	);