angular
	.module(
		'App',
		[
			'firebase',
			'ui.router',   
			'angular-md5',
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
				})

				.state('profile', {
				    url: '/profile.html',
				    controller: 'ProfileController',
				    templateUrl: 'views/profile.html', 
				})

				.state('all_products',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/all_products.html', 
					url: '/all_products.html'
				})

				.state('all_services',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/all_services.html', 
					url: '/all_services.html'
				})

				.state('company_statement',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/company_statement.html', 
					url: '/company_statement.html'
				})

				.state('creators',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/creators.html', 
					url: '/creators.html'
				}) 

				.state('employee', {
					controller: 'EmployeeController',
					templateUrl: 'views/employee.html',
					url: '/employee.html'
				})

				.state('events',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/events.html', 
					url: '/events.html'
				}) 

				.state('faq',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/faq.html', 
					url: '/faq.html'
				}) 

				.state('chat',{ 
					controller: 'ChatController', 
					templateUrl: 'views/chat.html', 
					url: '/chat.html'
				})

				.state('join_us',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/join_us.html', 
					url: '/join_us.html'
				})  

				.state('login', {
					controller: 'LoginController',
					templateUrl: 'views/login.html',
					url: '/login.html'
				})

				.state('opportunities',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/opportunities.html', 
					url: '/opportunities.html'
				})

				.state('our_partners',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/our_partners.html', 
					url: '/our_partners.html'
				})

				.state('our_philosophy',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/our_philosophy.html', 
					url: '/our_philosophy.html'
				}) 

				.state('partnerships', {
					// controller: 'IndexController',
					templateUrl: 'views/partnerships.html',
					url: '/partnerships.html'
				}) 

				.state('product',{ 
					controller: 'ProductController', 
					templateUrl: 'views/product.html', 
					url: '/product.html'
				})

				.state('service',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/service.html', 
					url: '/service.html'
				}) 

				.state('signup',{ 
					controller: 'SignUpController', 
					templateUrl: 'views/signup.html', 
					url: '/signup.html'
				}) 

				.state('smart_technologies',{ 
					// controller: 'IndexController', 
					templateUrl: 'views/smart_technologies.html', 
					url: '/smart_technologies.html'
				})  
				.state('upload',{ 
					controller: 'UploadController', 
					templateUrl: 'views/upload.html', 
					url: '/upload.html'
				}) 
			}
		]
	) 
	 
	/* 
		Constants are defined here
	*/
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