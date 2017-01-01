(function(){
	'use strict';
	angular.module('DIApp',[])
	.controller('DIController',DIController);
	.controller('MessageController' MessageController);
  
     function DIController($scope,$filter){
     	$scope.name="jb";

     	$scope.upper = function () {
           var upCase= $filter('uppercase');
           $scope.name=upCase($scope.name);
     	};
     };
     

     MessageController.$inject=[$scope];
     function MessageController($scope){
        $scope.name2="Bhardwaj";
     };

     $scope.sayMessage=function(){
    return "This Method returns a string";
     };

})();