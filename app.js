(function(){
	'use strict';
	
	angular.module('myFirstModule',[])
	.controller('NameCalculatorController',function($scope){
     $scope.name="";
     $scope.totalValue=0;
     $scope.totalNameValue=calculateNumericForString($scope.name);
     $scope.displayNumeric=function(){
     	var totalNameValue=calculateNumericForString($scope.name);
      $scope.totalValue=totalNameValue;
     };

     function calculateNumericForString(string){
      var totalStringValue=0; // get the total value
      for(var i=0;i<string.length;i++){
      	totalStringValue+=string.charCodeAt(i);
      }
      return totalStringValue;
     };

	});
})();