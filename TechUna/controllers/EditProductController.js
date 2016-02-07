angular 
  .module("App") 
    .controller('EditProductController', 
        ['$scope', '$rootScope', '$location', '$firebaseObject', '$firebaseArray','$routeParams', 'FIREBASE',
        function($scope, $rootScope, $location, $firebaseObject, $firebaseArray, $routeParams, FIREBASE) {

        $scope.whichproduct = $routeParams.mId; 
        $scope.whichuser = $routeParams.uId; 

        var ref = new Firebase(FIREBASE + 'users/'+ 
          $scope.whichuser + '/products' + $scope.whichproduct + '/editproduct');

        var productList = $firebaseArray(ref); 

        $scope.addDescription = function() { 

            var productsInfo = $firebaseArray(ref); 

            var myData = { 

                 description: $scope.user.description,
                 date: Firebase.ServerValue.TIMESTAMP 

            } 

            productsInfo.$add(myData).then(function(){ 

               $location.path('/editproduct' + $scope.whichuser+ '/' + 
                $scope.whichproduct + '/productList'); 

            }) 

        }//addDescription();




}]); //Controller    