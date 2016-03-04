var app = angular.module('ECSForumService', []);

app.service('ForumService', ['$http', function($http) { 
    
	var baseUrl = 'http://localhost:9000/forum/';
    var postUrl = 'http://localhost:9000/api/forum/';
    
	this.getPosts = function() {
        return $http.get(baseUrl).then(function(response) {
			return response.data;	
		});    
    }
    
	this.submit = function(post) {
		return $http.post(postUrl, post).then(function(response) {
			return response.data;
		});
	}
    
	this.getPostsWId = function(id) {
		return $http.get(baseUrl+id).then(function(response) {
			return response.data;	
		});
			
	}
	
	this.getUserName = function(userid) {
		return $http.get('http://localhost:9000/username/'+userid).then(function(response) {
			return response.data;
		});
	}
	
	this.sendComment = function(rp, data) {
		return $http.put('http://localhost:9000/api/forum/' + rp, data).then(function(response) {
			return response.data;
		});
	}
	
}]);