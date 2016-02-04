angular
	.module(
		'App',
		[
			'firebase',
			'ui.router',  
		]
	)
	.config(
		[
			'$urlRouterProvider',
			'$stateProvider',
			function($urlRouterProvider, $stateProvider) { 

				$urlRouterProvider.otherwise('/index.html');

				$stateProvider.state('home', {
					controller: 'IndexController',
					templateUrl: 'views/indexView.html',
					url: '/index.html'
				});

				$stateProvider.state('profile', { 
					controller: 'ProfileController', 
					templateUrl: 'views/profile.html',
					url: '/profile.html', 
					resolve: { 
					      auth: function($state, Users, Auth) { 
					        return Auth.$requireAuth().catch(function(){
					          $state.go('home');
					        });
					      },

					      profile: function(Users, Auth){
					        return Auth.$requireAuth().then(function(auth){
					          return Users.getProfile(auth.uid).$loaded();
					        });
					      }
					    }
				})

				$stateProvider.state('all_products',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/all_products.html', 
					url: '/all_products.html'
				});  

				$stateProvider.state('all_services',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/all_services.html', 
					url: '/all_services.html'
				}); 

				$stateProvider.state('company_statement',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/company_statement.html', 
					url: '/company_statement.html'
				}); 

				$stateProvider.state('creators',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/creators.html', 
					url: '/creators.html'
				}) 

				$stateProvider.state('employee', {
					controller: 'EmployeeController',
					templateUrl: 'views/employee.html',
					url: '/employee.html'
				}); 

				$stateProvider.state('events',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/events.html', 
					url: '/events.html'
				}); 

				$stateProvider.state('faq',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/faq.html', 
					url: '/faq.html'
				});  

				$stateProvider.state('chat',{ 
					controller: 'ChatController', 
					templateUrl: 'views/chat.html', 
					url: '/chat.html'
				});

				$stateProvider.state('join_us',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/join_us.html', 
					url: '/join_us.html'
				}) 
				$stateProvider.state('login', {
					controller: 'LoginController',
					templateUrl: 'views/login.html',
					url: '/login.html'
				}); 

				$stateProvider.state('opportunities',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/opportunities.html', 
					url: '/opportunities.html'
				}); 

				$stateProvider.state('our_partners',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/our_partners.html', 
					url: '/our_partners.html'
				}); 

				$stateProvider.state('our_philosophy',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/our_philosophy.html', 
					url: '/our_philosophy.html'
				}) 

				$stateProvider.state('partnerships', {
					// controller: 'IndexController',
					templateUrl: 'views/partnerships.html',
					url: '/partnerships.html'
				}); 

				$stateProvider.state('product',{ 
					controller: 'ProductController', 
					templateUrl: 'views/product.html', 
					url: '/product.html'
				}); 

				$stateProvider.state('service',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/service.html', 
					url: '/service.html'
				}); 

				$stateProvider.state('signup',{ 
					controller: 'SignUpController', 
					templateUrl: 'views/signup.html', 
					url: '/signup.html'
				}) 

				 $stateProvider.state('smart_technologies',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/smart_technologies.html', 
					url: '/smart_technologies.html'
				}) 
			}
		]
	)
	.constant(
		'AUTH_EVENTS',
		{
			loginSuccess: 'auth-login-success',
			loginFail: 'auth-login-fail',
			logout: 'auth-logout'
		}
	) 
	.constant(
		'EXCEPTIONS',
		{
			unauthenticated: 'unauthenticated-user'
		}
	) 
	//This is our firebase URL
	.constant(
		'FIREBASE', "https://samengfire.firebaseio.com/"
	);