var app = angular.module('ECSApp');

app.controller("ForumIncController", ['$location', '$scope', 'ForumService', 'UserService', '$routeParams', function($location, $scope, ForumService, UserService, $routeParams) {
	
	$scope.forumMainPost = null;
	$scope.forumUsername = null;
	$scope.comments = null;
	$scope.userOn = null;
	
	$scope.submit = function(post) {
		ForumService.submit(post).then(function(response) {
			$scope.post = null;
			$scope.retrievePosts();
		});
	}
	
	$scope.retrievePosts = function(rp) {
		ForumService.getPostsWId(rp).then(function(response) {
			$scope.forumMainPost = response;
			ForumService.getUserName(response.submitter).then(function(response) {
				$scope.forumUsername = response;
				
			});
			
		});
	}
	
	$scope.submitComment = function(data) {
		ForumService.sendComment($routeParams.postId, data).then(function(response) {
			$scope.forumMainPost = response;
			$scope.postComment = null;
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
	
	
	$scope.retrievePosts($routeParams.postId);


}]);