angular.module("directivePractice")
	.directive("dirDisplay", function () {
		return {
			
			templateUrl: "app/displayTemp.html",
			link: function (scope, elem, attr) {
				scope.showOrHide = true;
				elem.on('click', function () {
					scope.showOrHide = !scope.showOrHide;
					scope.$apply();
				})
				console.log(scope);
			}
		};
	});