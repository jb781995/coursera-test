(function(){
	'use script';
	angular.module('LunchCheck',[]).
	controller('CheckLunchController',[function($scope){
		$scope.items="";
		var self=this;

		self.justChecker=function(){
        alert("hello checker");
		};

		$scope.checkForLunchLimit=function(items){
			alert("inside method");
			var arrayOfItems=items.split(',');
			if(arrayOfItems.length>3){
				console.log("You have entered more items");
			}
			else{
				console.log("Enter 3 items");
			}

		};

	}]);
})();