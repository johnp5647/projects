var app = angular.module('ECSBadgeService', []);

app.service('BadgeService', ['$http', function($http) { 
	
	var baseUrl = 'http://localhost:9000/badge';
	
	this.badges = null;
	
	this.getBadges = function() {
		return $http.get(baseUrl).then(function(response) {
			return response.data;
		});
	}
	
	
}]);