var app = angular.module('ECSProfileService', []);

app.service('ProfileService', ['$http', function($http) { 
	
	var baseUrl = 'http://localhost:9000/api/username/';
	
	this.submitBadge = function(userId, object) {
		return $http.put(baseUrl+userId, object).then(function(response) {
			return response.data;
		});
	}
	
}]);