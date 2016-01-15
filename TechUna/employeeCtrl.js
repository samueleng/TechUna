var app = angular.module("myApp", ['ngRoute']) 
	  
app.controller('employeeCtrl', 
	function($scope,$timeout) { 
					  $scope.employeeName = "";  
		   			  $scope.employees = {} 
					 
					  $scope.myData = new Firebase("https://samengfire.firebaseio.com/")
					 
					  $scope.saveEmployee = function(){ 
					 			$scope.myData.push({employeeName:$scope.employeeName}) 
					 			$scope.employeeName = ""
					  }  
					  
					   $scope.myData.on('value', function(snapshot){ 
					 			
					  		$timeout(function(){ 
					  			$scope.employees = snapshot.val()
					  		}) 
					  }) 

    }) 

 