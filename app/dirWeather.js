angular.module("directivePractice")
	.directive("dirWeather", function () {
		
		return {
			templateUrl: "app/dirWeather.html",
			scope: {
				currentUser: "=",
				weatherCall: "&",
			},
			controller: function ($scope) {
	
				$scope.weatherCall({data: $scope.currentUser.city}).then(function (results) {
					$scope.temp = (results.data.main.temp)*(9/5)-459.67;
					$scope.weather = results.data.weather;
				}); 
	
				$scope.$watch(currentUser, weatherCall({data: $scope.currentUser.city}).then(function (results) {
					$scope.temp = (results.data.main.temp)*(9/5)-459.67;
					$scope.weather = results.data.weather;
				}) 
				);
			}
		}
	})