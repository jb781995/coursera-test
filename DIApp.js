(function(){
	'use strict';
	angular.module('DIApp',[])
	.controller('DIController',DIController);
  
     function DIController($scope,$filter){
     	$scope.name="Bhardwaj";

     	$scope.upper = function () {
           var upCase= $filter('upperCase');
           $scope.name=upCase($scope.name);
     	};
     }

})();