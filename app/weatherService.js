angular.module("directivePractice")
	.service("weatherService", function ($http) {
		
		this.getWeather = function (city) {
			return $http({
				method: "GET",
				url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=bdeada4db8bbeb46c1a1b08ea38c47b5",
			})
		}
		
	})