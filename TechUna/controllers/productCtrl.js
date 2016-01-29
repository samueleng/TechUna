angular 
       .module("App")
         .controller('productCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

             var myProducts = new Firebase("https://samengfire.firebaseio.com/products") 

             $scope.products = $firebaseArray(myProducts) 

             $scope.showForm = function(){ 
                $scope.addFormShow = true; 
                $scope.editFormShow = false ; 
                clearForm(); 
             } 

             $scope.hideFrom = function(){ 
                $scope.addFormShow = false; 
             } 

             function clearForm(){ 
                $scope.productName = ''; 
                $scope.productCode = ''; 
                $scope.description = ''; 
                $scope.price = '';
             } 

             $scope.addFormSubmit = function(){ 
                $scope.products.$add({ 
                    productName:$scope.productName,
                    productCode:$scope.productCode, 
                    description:$scope.description, 
                    price:$scope.price
                 }) 
                clearForm();
             } 

             $scope.showProduct = function(product){ 
                $scope.editFormShow = true; 
                $scope.addFormShow = false; 
                $scope.productName = product.productName;
                $scope.productCode = product.productCode;
                $scope.description = product.description;
                $scope.price = product.price; 
                $scope.id = product.$id;
             }

             $scope.editFormSubmit = function(){ 
                var id = $scope.id; 
                var record = $scope.products.$getRecord(id); 
                record.productName = $scope.productName; 
                record.productCode = $scope.productCode; 
                record.description = $scope.description; 
                record.price = $scope.price; 

                $scope.products.$save(record);
             }

             $scope.deleteProduct = function(){ 
                $scope.products.$remove(product);
             }




}]);
