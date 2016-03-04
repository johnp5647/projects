var app = angular.module('ECSApp');

app.controller("ForumController", ['$location', '$scope', 'ForumService', 'UserService', function($location, $scope, ForumService, UserService) {
	
	$scope.forumTitles = null;
	
	$scope.userOn = null;
	
	$scope.submit = function(post) {
		ForumService.submit(post).then(function(response) {
			$scope.post = null;
			$scope.retrievePosts();
		});
	}
	
	$scope.retrievePosts = function() {
		ForumService.getPosts().then(function(response) {
			$scope.forumTitles = response;
		});
	}
	
	$scope.check = function() {
		if(UserService.currentUser === 'null') {
			$scope.userOn = true;
		} else {
			$scope.userOn = false;
		}
	}
	$scope.check();
	$scope.retrievePosts();
	
}]);