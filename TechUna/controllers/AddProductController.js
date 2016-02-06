angular 
	.module("App") 
	  .controller( 
	  	"AddProductController",  
	  	['$scope', '$rootScope', '$firebaseAuth', '$firebaseArray', 'FIREBASE', 
	  	function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE){ 

	  		 var ref = new Firebase(FIREBASE);  

	  		 var auth = $firebaseAuth(ref); 

	  		 /*Listen for auth*/ 
	  		 auth.$onAuth(function(authUser){  

	  		 	if(authUser){ 
	  		 		var productsRef = new Firebase(FIREBASE + 'users/' + 
	  		 			$rootScope.currentUser.$id + '/products');  

	  		 		var productsInfo = $firebaseArray(productsRef);  

	  		 		$scope.products = productsInfo; 

	  		 		//make sure product data is loaded 
	  		 		productsInfo.$loaded().then(function(data){ 

	  		 			$rootScope.howManyProducts = productsInfo.length; 
	  		 		 
	  		 		}); 

	  		 		//make sure to update product length real time 
	  		 		productsInfo.$watch(function(data){ 

	  		 			$rootScope.howManyProducts = productsInfo.length;

	  		 		}) 

	  		 		//add a product object to firebase
	  		 		$scope.addProduct = function(){ 

	  		 			 productsInfo.$add({  

	  		 			 	name: $scope.productname, 
	  		 			 	date: Firebase.ServerValue.TIMESTAMP 

	  		 			 }).then(function(){  

	  		 			 	$scope.productname = ''; 

	  		 			 }); 
	  		 		};  

	  		 		//delete product from firebase 
	  		 		$scope.deleteProduct = function(key){  

	  		 			productsInfo.$remove(key); 

	  		 		} 

	  		 	} 

	  		 })//onAuth
}])